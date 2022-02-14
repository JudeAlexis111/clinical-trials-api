package com.clinicalTrials.studies.model;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.HashMap;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class IdentificationModule {

  @JsonProperty("NCTId")
  public String nCTId;

  @JsonProperty("OrgStudyIdInfo")
  public OrgStudyIdInfo orgStudyIdInfo;

  @JsonProperty("Organization")
  public Organization organization;

  @JsonProperty("BriefTitle")
  public String briefTitle;

  @JsonProperty("OfficialTitle")
  public String officialTitle;

  @JsonProperty("NCTIdAliasList")
  public NCTIdAliasList nCTIdAliasList;

  @JsonProperty("SecondaryIdInfoList")
  public SecondaryIdInfoList secondaryIdInfoList;

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
