package com.clinicalTrials.studies.service;

import com.clinicalTrials.studies.model.StudiesResponseV1;
import org.springframework.stereotype.Service;

@Service
public interface ClinicalTrialsService {
  StudiesResponseV1 getStudies(String keyword, String city, String state);
}
