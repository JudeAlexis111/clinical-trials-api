package com.clinicalTrials.studies.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import java.util.List;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class StudyInfoV1 {
  public String id;
  public String name;
  public String briefDescription;
  public String startDate;
  public String endDate;
  public String locationFacility;
  public String locationCity;
  public String locationState;
  public String locationZip;
  public String locationCountry;
  public String imageUrl;
  public String detailedStudyInfoUrl;
  public int rating;
  public int noOfReviews;
  public String primaryContactName;
  public String primaryContactEmail;
  public String primaryContactPhone;
  public Eligibility eligibility;
  public List<Intervention> interventions;
  public List<String> studyDetails;
}
