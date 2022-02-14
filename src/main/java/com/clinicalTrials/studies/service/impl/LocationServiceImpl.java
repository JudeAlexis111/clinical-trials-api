package com.clinicalTrials.studies.service.impl;

import com.clinicalTrials.studies.places.model.LocationResponse;
import com.clinicalTrials.studies.service.LocationService;
import java.util.Arrays;
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
public class LocationServiceImpl implements LocationService {

  private final RestTemplate restTemplate;
  private final Logger log = LoggerFactory.getLogger(LocationServiceImpl.class);
  public static final String API_KEY = "AIzaSyALvIfekNApJHA1L7OvFbUsYDWI4-r-yKg";

  public LocationServiceImpl(RestTemplateBuilder restTemplateBuilder) {
    this.restTemplate = restTemplateBuilder.build();
    MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
    converter.setSupportedMediaTypes(
        Arrays.asList(MediaType.TEXT_PLAIN, MediaType.APPLICATION_JSON));
    restTemplate.getMessageConverters().add(0, converter);
  }

  protected RestTemplate getRestTemplate() {
    return restTemplate;
  }

  @Override
  public String getLocationImage(String location) {
    String locationUrl =
        "https://maps.googleapis.com/maps/api/place/textsearch/json?query="
            + location
            + "&key="
            + API_KEY;
    HttpHeaders requestHeaders = new HttpHeaders();
    HttpEntity requestEntity = new HttpEntity<>(requestHeaders);
    ResponseEntity<LocationResponse> response =
        getRestTemplate()
            .exchange(locationUrl, HttpMethod.GET, requestEntity, LocationResponse.class);
    String photoReference = "";
    if ( response.getBody() != null && response.getBody().results !=null && response.getBody().results.get(0) != null
    &&  response.getBody().results.get(0).photos !=null && response.getBody().results.get(0).photos.get(0).photoReference != null )
    {
       photoReference = response.getBody().results.get(0).photos.get(0).photoReference;
    }
    String locationImageUrl =
        "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference="
            + photoReference
            + "&key="
            + API_KEY;
    return locationImageUrl;
  }
}
