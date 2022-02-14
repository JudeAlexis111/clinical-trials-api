package com.clinicalTrials.studies.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.ArrayList;
import java.util.List;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class FullStudiesResponse {

  @JsonProperty("APIVrs")
  public String aPIVrs;

  @JsonProperty("DataVrs")
  public String dataVrs;

  @JsonProperty("Expression")
  public String expression;

  @JsonProperty("NStudiesAvail")
  public Integer nStudiesAvail;

  @JsonProperty("NStudiesFound")
  public Integer nStudiesFound;

  @JsonProperty("MinRank")
  public Integer minRank;

  public Integer MaxRank;

  public Integer NStudiesReturned;

  @JsonProperty("FullStudies")
  public List<FullStudy> FullStudies = new ArrayList<>();
}
