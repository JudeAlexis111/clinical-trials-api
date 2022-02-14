package com.clinicalTrials.studies.model;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.HashMap;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class StatusModule {

  @JsonProperty("StatusVerifiedDate")
  public String statusVerifiedDate;

  @JsonProperty("OverallStatus")
  public String overallStatus;

  @JsonProperty("WhyStopped")
  public String whyStopped;

  @JsonProperty("ExpandedAccessInfo")
  public ExpandedAccessInfo expandedAccessInfo;

  @JsonProperty("StartDateStruct")
  public StartDateStruct startDateStruct;

  @JsonProperty("PrimaryCompletionDateStruct")
  public PrimaryCompletionDateStruct primaryCompletionDateStruct;

  @JsonProperty("CompletionDateStruct")
  public CompletionDateStruct completionDateStruct;

  @JsonProperty("StudyFirstSubmitDate")
  public String studyFirstSubmitDate;

  @JsonProperty("StudyFirstSubmitQCDate")
  public String studyFirstSubmitQCDate;

  @JsonProperty("StudyFirstPostDateStruct")
  public StudyFirstPostDateStruct studyFirstPostDateStruct;

  @JsonProperty("LastUpdateSubmitDate")
  public String lastUpdateSubmitDate;

  @JsonProperty("LastUpdatePostDateStruct")
  public LastUpdatePostDateStruct lastUpdatePostDateStruct;

  @JsonIgnore private Map<String, Object> additionalProperties = new HashMap<String, Object>();

  @JsonAnyGetter
  public Map<String, Object> getAdditionalProperties() {
    return this.additionalProperties;
  }

  @JsonAnySetter
  public void setAdditionalProperty(String name, Object value) {
    this.additionalProperties.put(name, value);
  }
}
