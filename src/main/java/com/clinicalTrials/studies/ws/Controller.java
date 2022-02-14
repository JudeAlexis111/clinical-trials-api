package com.clinicalTrials.studies.ws;

import com.clinicalTrials.studies.model.StudiesResponseV1;
import com.clinicalTrials.studies.service.ClinicalTrialsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("v1/clinical-trials")
public class Controller {

  private final ClinicalTrialsService clinicalTrialsService;

  public Controller(ClinicalTrialsService clinicalTrialsService) {
    this.clinicalTrialsService = clinicalTrialsService;
  }

  protected ClinicalTrialsService getClinicalTrialsService() {
    return clinicalTrialsService;
  }

  @GetMapping(value = "/info", produces = "application/json")
  public String displayInfo() {
    return "Clinical Trials";
  }

  @GetMapping(
      value = "/studies/keyword/{keyword}/city/{city}/state/{state}",
      produces = "application/json")
  public StudiesResponseV1 findCommitsByEmployee(
      @PathVariable("keyword") String keyword,
      @PathVariable("city") String city,
      @PathVariable("state") String state) {
    return getClinicalTrialsService().getStudies(keyword, city, state);
  }
}
