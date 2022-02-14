package com.clinicalTrials.studies.service;

import org.springframework.stereotype.Service;

@Service
public interface LocationService {
  String getLocationImage(String location);
}
