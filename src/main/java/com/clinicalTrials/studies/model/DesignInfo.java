package com.clinicalTrials.studies.model;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.HashMap;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class DesignInfo {

  @JsonProperty("DesignAllocation")
  public String designAllocation;

  @JsonProperty("DesignInterventionModel")
  public String designInterventionModel;

  @JsonProperty("DesignInterventionModelDescription")
  public String designInterventionModelDescription;

  @JsonProperty("DesignPrimaryPurpose")
  public String designPrimaryPurpose;

  @JsonProperty("DesignMaskingInfo")
  public DesignMaskingInfo designMaskingInfo;

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
