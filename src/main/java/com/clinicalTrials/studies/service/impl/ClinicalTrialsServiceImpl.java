package com.clinicalTrials.studies.service.impl;

import com.clinicalTrials.studies.model.Eligibility;
import com.clinicalTrials.studies.model.FullStudiesResponse;
import com.clinicalTrials.studies.model.Response;
import com.clinicalTrials.studies.model.StudiesResponseV1;
import com.clinicalTrials.studies.model.StudyInfoV1;
import com.clinicalTrials.studies.service.ClinicalTrialsService;
import com.clinicalTrials.studies.service.LocationService;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import javax.inject.Named;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;

@Named
public class ClinicalTrialsServiceImpl implements ClinicalTrialsService {

  private final RestTemplate restTemplate;
  private final LocationService locationService;
  private final Logger log = LoggerFactory.getLogger(ClinicalTrialsServiceImpl.class);

  protected RestTemplate getRestTemplate() {
    return restTemplate;
  }

  public ClinicalTrialsServiceImpl(
      RestTemplateBuilder restTemplateBuilder, LocationService locationService) {
    this.restTemplate = restTemplateBuilder.build();
    this.locationService = locationService;
    MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
    converter.setSupportedMediaTypes(
        Arrays.asList(MediaType.TEXT_PLAIN, MediaType.APPLICATION_JSON));
    restTemplate.getMessageConverters().add(0, converter);
  }

  @Override
  public StudiesResponseV1 getStudies(String keyword, String city, String state) {
    StudiesResponseV1 studiesResponseV1 = new StudiesResponseV1();
    List<StudyInfoV1> studies = new ArrayList<>();
    String studiesUrl =
        "https://clinicaltrials.gov/api/query/full_studies?expr="
            + keyword
            + " AND SEARCH[Location](AREA[LocationCity]"
            + city
            + " AND AREA[LocationState]"
            + state
            + " AND AREA[LocationStatus]Recruiting)&fmt=json&min_rnk=1&max_rnk=10";
    log.debug(" Studies Url : {}", studiesUrl);
    HttpHeaders requestHeaders = new HttpHeaders();
    HttpEntity requestEntity = new HttpEntity<>(requestHeaders);
    // set up HTTP Basic Authentication Header
    requestHeaders.add("Accept", MediaType.APPLICATION_JSON_VALUE);
    ResponseEntity<Response> response =
        getRestTemplate().exchange(studiesUrl, HttpMethod.GET, requestEntity, Response.class);
    restTemplate.getForObject(studiesUrl, FullStudiesResponse.class);
    response.getBody().FullStudiesResponse.FullStudies.stream()
        .forEach(
            fullStudy -> {
              StudyInfoV1 studyInfoV1 = new StudyInfoV1();
              studyInfoV1.id = String.valueOf(fullStudy.rank);
              studyInfoV1.name = fullStudy.study.protocolSection.identificationModule.briefTitle;
              studyInfoV1.locationFacility =
                  fullStudy.study.protocolSection.identificationModule.organization.orgFullName;
              studyInfoV1.briefDescription =
                  fullStudy.study.protocolSection.descriptionModule.briefSummary;
              studyInfoV1.startDate =
                  fullStudy.study.protocolSection.statusModule.startDateStruct.startDate;
              if (fullStudy.study.protocolSection.statusModule.completionDateStruct !=null
                      && fullStudy.study.protocolSection.statusModule.completionDateStruct.completionDate !=null)
              studyInfoV1.endDate =
                  fullStudy.study.protocolSection.statusModule.completionDateStruct.completionDate;
              studyInfoV1.locationCity =
                  fullStudy.study.protocolSection.contactsLocationsModule.locationList.location.get(
                          0)
                      .locationCity;
              studyInfoV1.locationState =
                  fullStudy.study.protocolSection.contactsLocationsModule.locationList.location.get(
                          0)
                      .locationState;
              studyInfoV1.locationZip =
                  fullStudy.study.protocolSection.contactsLocationsModule.locationList.location.get(
                          0)
                      .locationZip;
              studyInfoV1.imageUrl =
                  locationService.getLocationImage(
                      studyInfoV1.locationFacility
                          + ","
                          + studyInfoV1.locationCity
                          + ","
                          + studyInfoV1.locationState);
              studyInfoV1.rating = getRandomNumber(1, 5);
              studyInfoV1.noOfReviews = getRandomNumber(10, 200);
              studyInfoV1.detailedStudyInfoUrl =
                  "https://clinicaltrials.gov/ct2/show/"
                      + fullStudy.study.protocolSection.identificationModule.nCTId;
              Eligibility eligibility = new Eligibility();
              eligibility.eligibilityCriteria =
                  fullStudy.study.protocolSection.eligibilityModule.eligibilityCriteria;
              eligibility.gender = fullStudy.study.protocolSection.eligibilityModule.gender;
              eligibility.healthyVolunteers =
                  fullStudy.study.protocolSection.eligibilityModule.healthyVolunteers;
              eligibility.minimumAge = fullStudy.study.protocolSection.eligibilityModule.minimumAge;
              eligibility.maximumAge = fullStudy.study.protocolSection.eligibilityModule.maximumAge;
              eligibility.standardAgeList =
                  fullStudy.study.protocolSection.eligibilityModule.stdAgeList.stdAge;
              studyInfoV1.eligibility = eligibility;
              if (fullStudy.study.protocolSection != null
                  && fullStudy.study.protocolSection.contactsLocationsModule != null
                  && fullStudy.study.protocolSection.contactsLocationsModule.centralContactList
                      != null
                  && fullStudy
                          .study
                          .protocolSection
                          .contactsLocationsModule
                          .centralContactList
                          .centralContact
                      != null) {
                studyInfoV1.primaryContactName =
                    fullStudy.study.protocolSection.contactsLocationsModule.centralContactList
                        .centralContact.get(0)
                        .centralContactName;
                studyInfoV1.primaryContactPhone =
                    fullStudy.study.protocolSection.contactsLocationsModule.centralContactList
                        .centralContact.get(0)
                        .centralContactPhone;
              }
              if (fullStudy.study.protocolSection != null
                  && fullStudy.study.protocolSection.armsInterventionsModule != null
                  && fullStudy.study.protocolSection.armsInterventionsModule.interventionList
                      != null
                  && fullStudy
                          .study
                          .protocolSection
                          .armsInterventionsModule
                          .interventionList
                          .intervention
                      != null) {

                studyInfoV1.interventions =
                    fullStudy
                        .study
                        .protocolSection
                        .armsInterventionsModule
                        .interventionList
                        .intervention;
              }

              studies.add(studyInfoV1);
            });

    studiesResponseV1.studies = studies;
    return studiesResponseV1;
  }

  public int getRandomNumber(int lowRange, int highRange) {
    Random r = new Random();
    return r.nextInt(highRange - lowRange) + lowRange;
  }
}
