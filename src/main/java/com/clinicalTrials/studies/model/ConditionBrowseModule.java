package com.clinicalTrials.studies.model;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.HashMap;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ConditionBrowseModule {

  @JsonProperty("ConditionMeshList")
  public ConditionMeshList conditionMeshList;

  @JsonProperty("ConditionAncestorList")
  public ConditionAncestorList conditionAncestorList;

  @JsonProperty("ConditionBrowseLeafList")
  public ConditionBrowseLeafList conditionBrowseLeafList;

  @JsonProperty("ConditionBrowseBranchList")
  public ConditionBrowseBranchList conditionBrowseBranchList;

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
