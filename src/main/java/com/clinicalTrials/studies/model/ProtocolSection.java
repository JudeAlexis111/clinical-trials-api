package com.clinicalTrials.studies.model;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.HashMap;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProtocolSection {

  @JsonProperty("IdentificationModule")
  public IdentificationModule identificationModule;

  @JsonProperty("StatusModule")
  public StatusModule statusModule;

  @JsonProperty("SponsorCollaboratorsModule")
  public SponsorCollaboratorsModule sponsorCollaboratorsModule;

  @JsonProperty("OversightModule")
  public OversightModule oversightModule;

  @JsonProperty("DescriptionModule")
  public DescriptionModule descriptionModule;

  @JsonProperty("ConditionsModule")
  public ConditionsModule conditionsModule;

  @JsonProperty("DesignModule")
  public DesignModule designModule;

  @JsonProperty("ArmsInterventionsModule")
  public ArmsInterventionsModule armsInterventionsModule;

  @JsonProperty("OutcomesModule")
  public OutcomesModule outcomesModule;

  @JsonProperty("EligibilityModule")
  public EligibilityModule eligibilityModule;

  @JsonProperty("ContactsLocationsModule")
  public ContactsLocationsModule contactsLocationsModule;

  @JsonProperty("ReferencesModule")
  public ReferencesModule referencesModule;

  @JsonProperty("IPDSharingStatementModule")
  public IPDSharingStatementModule iPDSharingStatementModule;

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
