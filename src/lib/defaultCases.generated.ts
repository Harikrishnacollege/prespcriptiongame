import { PrescriptionCase } from "./types";

export const defaultCases = [
  {
    "caseId": "case-2",
    "patientSpeech": "Doctor, I feel breathless and my chest is tight.",
    "diagnosis": "An Acute Attack Of Bronchial Asthma",
    "age": 36,
    "sex": "Female",
    "prescriptionSections": {
      "drug": "Salbutamol + Salbutamol Inhaler + Methyl Prednisolone",
      "dose": "5mg + 1 vial + 1ml + 100mcg",
      "dispense": "1 vial Nebulize 1ml diluted with saline (followed by) -Salbutamol Inhaler 100mcg/md(metered dose) Dispense + 1 vial 0",
      "route": "IV + Nebulized/Inhalation",
      "frequency": "Every 6 hrs + 4 times daily",
      "instructions": "To be inhaled 4 times daily"
    },
    "correctAnswers": {
      "drug": "Salbutamol + Salbutamol Inhaler + Methyl Prednisolone",
      "dose": "5mg + 1 vial + 1ml + 100mcg",
      "dispense": "1 vial Nebulize 1ml diluted with saline (followed by) -Salbutamol Inhaler 100mcg/md(metered dose) Dispense + 1 vial 0",
      "route": "IV + Nebulized/Inhalation",
      "frequency": "Every 6 hrs + 4 times daily",
      "instructions": "To be inhaled 4 times daily"
    },
    "explanations": {
      "drug": "Drug should match the prescription recommended for An Acute Attack Of Bronchial Asthma.",
      "dose": "Dose should match the prescription recommended for An Acute Attack Of Bronchial Asthma.",
      "dispense": "Dispense should match the prescription recommended for An Acute Attack Of Bronchial Asthma.",
      "route": "Route should match the prescription recommended for An Acute Attack Of Bronchial Asthma.",
      "frequency": "Frequency should match the prescription recommended for An Acute Attack Of Bronchial Asthma.",
      "instructions": "Instructions should match the prescription recommended for An Acute Attack Of Bronchial Asthma."
    },
    "options": {
      "drug": [
        "Salbutamol + Salbutamol Inhaler + Methyl Prednisolone",
        "Amlodipine + Hydrochlorothiazide",
        "Enalapril + Frusemide + Metoprolol",
        "Isosorbide Dinitrate + Isosorbide Mononitrate"
      ],
      "dose": [
        "5mg + 1 vial + 1ml + 100mcg",
        "5mg + 30 tablets + 12.5mg",
        "2.5mg + 7 tablets + 40mg + 20mg",
        "5mg + 20mg + 30 tabs"
      ],
      "dispense": [
        "1 vial Nebulize 1ml diluted with saline (followed by) -Salbutamol Inhaler 100mcg/md(metered dose) Dispense + 1 vial 0",
        "30 tablets",
        "7 tablets + 14 tablets",
        "2 sublingual tablets + 30 tabs"
      ],
      "route": [
        "IV + Nebulized/Inhalation",
        "Oral",
        "Sublingual",
        "IV + IM"
      ],
      "frequency": [
        "Every 6 hrs + 4 times daily",
        "Once daily + Once daily Case",
        "Once daily + Once daily early + Twice daily",
        "Twice daily"
      ],
      "instructions": [
        "To be inhaled 4 times daily",
        "One tablet to be taken once daily + One tablet to be taken once daily Case to be reviewed after one week",
        "One tablet taken once daily + One tablet taken twice daily",
        "One tab to be placed sublingually during attack + One tablet to be taken twice daily"
      ]
    }
  },
  {
    "caseId": "case-3",
    "patientSpeech": "Doctor, my blood pressure has been running high.",
    "diagnosis": "Moderate Hypertension",
    "age": 43,
    "sex": "Male",
    "prescriptionSections": {
      "drug": "Amlodipine + Hydrochlorothiazide",
      "dose": "5mg + 30 tablets + 12.5mg",
      "dispense": "30 tablets",
      "route": "Oral",
      "frequency": "Once daily + Once daily Case",
      "instructions": "One tablet to be taken once daily + One tablet to be taken once daily Case to be reviewed after one week"
    },
    "correctAnswers": {
      "drug": "Amlodipine + Hydrochlorothiazide",
      "dose": "5mg + 30 tablets + 12.5mg",
      "dispense": "30 tablets",
      "route": "Oral",
      "frequency": "Once daily + Once daily Case",
      "instructions": "One tablet to be taken once daily + One tablet to be taken once daily Case to be reviewed after one week"
    },
    "explanations": {
      "drug": "Drug should match the prescription recommended for Moderate Hypertension.",
      "dose": "Dose should match the prescription recommended for Moderate Hypertension.",
      "dispense": "Dispense should match the prescription recommended for Moderate Hypertension.",
      "route": "Route should match the prescription recommended for Moderate Hypertension.",
      "frequency": "Frequency should match the prescription recommended for Moderate Hypertension.",
      "instructions": "Instructions should match the prescription recommended for Moderate Hypertension."
    },
    "options": {
      "drug": [
        "Amlodipine + Hydrochlorothiazide",
        "Enalapril + Frusemide + Metoprolol",
        "Isosorbide Dinitrate + Isosorbide Mononitrate",
        "Clarithromycin + Amoxycillin"
      ],
      "dose": [
        "5mg + 30 tablets + 12.5mg",
        "2.5mg + 7 tablets + 40mg + 20mg",
        "5mg + 20mg + 30 tabs",
        "20mg + 30 tablets + 500mg + 30 capsules"
      ],
      "dispense": [
        "30 tablets",
        "7 tablets + 14 tablets",
        "2 sublingual tablets + 30 tabs",
        "30 tablets + 30 capsules"
      ],
      "route": [
        "Oral",
        "Sublingual",
        "IV + IM",
        "IV"
      ],
      "frequency": [
        "Once daily + Once daily Case",
        "Once daily + Once daily early + Twice daily",
        "Twice daily",
        "Twice daily for"
      ],
      "instructions": [
        "One tablet to be taken once daily + One tablet to be taken once daily Case to be reviewed after one week",
        "One tablet taken once daily + One tablet taken twice daily",
        "One tab to be placed sublingually during attack + One tablet to be taken twice daily",
        "One tablet to be taken twice daily for 14 days + One capsule to be taken twice daily for 14 days Continue omeprazole for further 6 weeks"
      ]
    }
  },
  {
    "caseId": "case-4",
    "patientSpeech": "Doctor, I get tired and short of breath easily.",
    "diagnosis": "Moderate Congestive Cardiac Failure",
    "age": 50,
    "sex": "Female",
    "prescriptionSections": {
      "drug": "Enalapril + Frusemide + Metoprolol",
      "dose": "2.5mg + 7 tablets + 40mg + 20mg",
      "dispense": "7 tablets + 14 tablets",
      "route": "Oral",
      "frequency": "Once daily + Once daily early + Twice daily",
      "instructions": "One tablet taken once daily + One tablet taken twice daily"
    },
    "correctAnswers": {
      "drug": "Enalapril + Frusemide + Metoprolol",
      "dose": "2.5mg + 7 tablets + 40mg + 20mg",
      "dispense": "7 tablets + 14 tablets",
      "route": "Oral",
      "frequency": "Once daily + Once daily early + Twice daily",
      "instructions": "One tablet taken once daily + One tablet taken twice daily"
    },
    "explanations": {
      "drug": "Drug should match the prescription recommended for Moderate Congestive Cardiac Failure.",
      "dose": "Dose should match the prescription recommended for Moderate Congestive Cardiac Failure.",
      "dispense": "Dispense should match the prescription recommended for Moderate Congestive Cardiac Failure.",
      "route": "Route should match the prescription recommended for Moderate Congestive Cardiac Failure.",
      "frequency": "Frequency should match the prescription recommended for Moderate Congestive Cardiac Failure.",
      "instructions": "Instructions should match the prescription recommended for Moderate Congestive Cardiac Failure."
    },
    "options": {
      "drug": [
        "Enalapril + Frusemide + Metoprolol",
        "Isosorbide Dinitrate + Isosorbide Mononitrate",
        "Clarithromycin + Amoxycillin",
        "Ciprofloxacin + Hyoscine Butyl Bromide"
      ],
      "dose": [
        "2.5mg + 7 tablets + 40mg + 20mg",
        "5mg + 20mg + 30 tabs",
        "20mg + 30 tablets + 500mg + 30 capsules",
        "400mg + 500 mg + 10 tablets + 10mg"
      ],
      "dispense": [
        "7 tablets + 14 tablets",
        "2 sublingual tablets + 30 tabs",
        "30 tablets + 30 capsules",
        "10 tablets"
      ],
      "route": [
        "Oral",
        "IV + IM",
        "IV",
        "Topical dental use"
      ],
      "frequency": [
        "Once daily + Once daily early + Twice daily",
        "Twice daily",
        "Twice daily for",
        "BID + TID"
      ],
      "instructions": [
        "One tablet taken once daily + One tablet taken twice daily",
        "One tab to be placed sublingually during attack + One tablet to be taken twice daily",
        "One tablet to be taken twice daily for 14 days + One capsule to be taken twice daily for 14 days Continue omeprazole for further 6 weeks",
        "One tablet to be taken BID for 5 days + One tablet to be taken TID daily"
      ]
    }
  },
  {
    "caseId": "case-5",
    "patientSpeech": "Doctor, I get chest pain when I walk or climb stairs.",
    "diagnosis": "Angina On Exertion",
    "age": 57,
    "sex": "Male",
    "prescriptionSections": {
      "drug": "Isosorbide Dinitrate + Isosorbide Mononitrate",
      "dose": "5mg + 20mg + 30 tabs",
      "dispense": "2 sublingual tablets + 30 tabs",
      "route": "Sublingual",
      "frequency": "Twice daily",
      "instructions": "One tab to be placed sublingually during attack + One tablet to be taken twice daily"
    },
    "correctAnswers": {
      "drug": "Isosorbide Dinitrate + Isosorbide Mononitrate",
      "dose": "5mg + 20mg + 30 tabs",
      "dispense": "2 sublingual tablets + 30 tabs",
      "route": "Sublingual",
      "frequency": "Twice daily",
      "instructions": "One tab to be placed sublingually during attack + One tablet to be taken twice daily"
    },
    "explanations": {
      "drug": "Drug should match the prescription recommended for Angina On Exertion.",
      "dose": "Dose should match the prescription recommended for Angina On Exertion.",
      "dispense": "Dispense should match the prescription recommended for Angina On Exertion.",
      "route": "Route should match the prescription recommended for Angina On Exertion.",
      "frequency": "Frequency should match the prescription recommended for Angina On Exertion.",
      "instructions": "Instructions should match the prescription recommended for Angina On Exertion."
    },
    "options": {
      "drug": [
        "Isosorbide Dinitrate + Isosorbide Mononitrate",
        "Clarithromycin + Amoxycillin",
        "Ciprofloxacin + Hyoscine Butyl Bromide",
        "Glipizide + Metformin"
      ],
      "dose": [
        "5mg + 20mg + 30 tabs",
        "20mg + 30 tablets + 500mg + 30 capsules",
        "400mg + 500 mg + 10 tablets + 10mg",
        "5mg + 60 tablets + 500mg"
      ],
      "dispense": [
        "2 sublingual tablets + 30 tabs",
        "30 tablets + 30 capsules",
        "10 tablets",
        "60 tablets"
      ],
      "route": [
        "Sublingual",
        "Oral",
        "IV + IM",
        "IV"
      ],
      "frequency": [
        "Twice daily",
        "Twice daily for",
        "BID + TID",
        "Twice daily before + Twice daily after"
      ],
      "instructions": [
        "One tab to be placed sublingually during attack + One tablet to be taken twice daily",
        "One tablet to be taken twice daily for 14 days + One capsule to be taken twice daily for 14 days Continue omeprazole for further 6 weeks",
        "One tablet to be taken BID for 5 days + One tablet to be taken TID daily",
        "One tablet to be taken twice daily before food + One tablet to be taken twice daily after food"
      ]
    }
  },
  {
    "caseId": "case-6",
    "patientSpeech": "Doctor, I have burning stomach pain and acidity.",
    "diagnosis": "Peptic Ulcer Due To H. pylori",
    "age": 64,
    "sex": "Female",
    "prescriptionSections": {
      "drug": "Clarithromycin + Amoxycillin",
      "dose": "20mg + 30 tablets + 500mg + 30 capsules",
      "dispense": "30 tablets + 30 capsules",
      "route": "Oral",
      "frequency": "Twice daily for",
      "instructions": "One tablet to be taken twice daily for 14 days + One capsule to be taken twice daily for 14 days Continue omeprazole for further 6 weeks"
    },
    "correctAnswers": {
      "drug": "Clarithromycin + Amoxycillin",
      "dose": "20mg + 30 tablets + 500mg + 30 capsules",
      "dispense": "30 tablets + 30 capsules",
      "route": "Oral",
      "frequency": "Twice daily for",
      "instructions": "One tablet to be taken twice daily for 14 days + One capsule to be taken twice daily for 14 days Continue omeprazole for further 6 weeks"
    },
    "explanations": {
      "drug": "Drug should match the prescription recommended for Peptic Ulcer Due To H. pylori.",
      "dose": "Dose should match the prescription recommended for Peptic Ulcer Due To H. pylori.",
      "dispense": "Dispense should match the prescription recommended for Peptic Ulcer Due To H. pylori.",
      "route": "Route should match the prescription recommended for Peptic Ulcer Due To H. pylori.",
      "frequency": "Frequency should match the prescription recommended for Peptic Ulcer Due To H. pylori.",
      "instructions": "Instructions should match the prescription recommended for Peptic Ulcer Due To H. pylori."
    },
    "options": {
      "drug": [
        "Clarithromycin + Amoxycillin",
        "Ciprofloxacin + Hyoscine Butyl Bromide",
        "Glipizide + Metformin",
        "Adrenaline Hydrochloride + Methyl Prednisolone + Pheneramine Maleate"
      ],
      "dose": [
        "20mg + 30 tablets + 500mg + 30 capsules",
        "400mg + 500 mg + 10 tablets + 10mg",
        "5mg + 60 tablets + 500mg",
        "1:1000 + 1mg + 1 ampoule + 0.5ml"
      ],
      "dispense": [
        "30 tablets + 30 capsules",
        "10 tablets",
        "60 tablets",
        "1 ampoule + 1 vial 0 + 1 ampoule 1ml to be injected IV"
      ],
      "route": [
        "Oral",
        "Topical dental use",
        "IV",
        "IM + Mouth rinse"
      ],
      "frequency": [
        "Twice daily for",
        "BID + TID",
        "Twice daily before + Twice daily after",
        "As clinically directed"
      ],
      "instructions": [
        "One tablet to be taken twice daily for 14 days + One capsule to be taken twice daily for 14 days Continue omeprazole for further 6 weeks",
        "One tablet to be taken BID for 5 days + One tablet to be taken TID daily",
        "One tablet to be taken twice daily before food + One tablet to be taken twice daily after food",
        "To be injected IM + To be injected IV"
      ]
    }
  },
  {
    "caseId": "case-7",
    "patientSpeech": "Doctor, I have loose stools with cramps.",
    "diagnosis": "Bacillary Dysentery",
    "age": 25,
    "sex": "Male",
    "prescriptionSections": {
      "drug": "Ciprofloxacin + Hyoscine Butyl Bromide",
      "dose": "400mg + 500 mg + 10 tablets + 10mg",
      "dispense": "10 tablets",
      "route": "Oral",
      "frequency": "BID + TID",
      "instructions": "One tablet to be taken BID for 5 days + One tablet to be taken TID daily"
    },
    "correctAnswers": {
      "drug": "Ciprofloxacin + Hyoscine Butyl Bromide",
      "dose": "400mg + 500 mg + 10 tablets + 10mg",
      "dispense": "10 tablets",
      "route": "Oral",
      "frequency": "BID + TID",
      "instructions": "One tablet to be taken BID for 5 days + One tablet to be taken TID daily"
    },
    "explanations": {
      "drug": "Drug should match the prescription recommended for Bacillary Dysentery.",
      "dose": "Dose should match the prescription recommended for Bacillary Dysentery.",
      "dispense": "Dispense should match the prescription recommended for Bacillary Dysentery.",
      "route": "Route should match the prescription recommended for Bacillary Dysentery.",
      "frequency": "Frequency should match the prescription recommended for Bacillary Dysentery.",
      "instructions": "Instructions should match the prescription recommended for Bacillary Dysentery."
    },
    "options": {
      "drug": [
        "Ciprofloxacin + Hyoscine Butyl Bromide",
        "Glipizide + Metformin",
        "Adrenaline Hydrochloride + Methyl Prednisolone + Pheneramine Maleate",
        "Lorazepam + Fosphenytoin"
      ],
      "dose": [
        "400mg + 500 mg + 10 tablets + 10mg",
        "5mg + 60 tablets + 500mg",
        "1:1000 + 1mg + 1 ampoule + 0.5ml",
        "4 mg + 2 ampoules + 1 ml + 2mg"
      ],
      "dispense": [
        "10 tablets",
        "60 tablets",
        "1 ampoule + 1 vial 0 + 1 ampoule 1ml to be injected IV",
        "2 ampoules + 2 vials 15mg/kg to be infused slow IV over 30 mins (not to exceed 150 mg/min)"
      ],
      "route": [
        "Oral",
        "IV",
        "IM + Mouth rinse",
        "Mouth rinse"
      ],
      "frequency": [
        "BID + TID",
        "Twice daily before + Twice daily after",
        "As clinically directed",
        "Thrice daily after + Once daily"
      ],
      "instructions": [
        "One tablet to be taken BID for 5 days + One tablet to be taken TID daily",
        "One tablet to be taken twice daily before food + One tablet to be taken twice daily after food",
        "To be injected IM + To be injected IV",
        "To be injected slow IV( at the rate of 2mg/min) To be repeated after 10 mins if needed + To be infused slow IV over 30 mins (not to exceed 150 mg/min)"
      ]
    }
  },
  {
    "caseId": "case-8",
    "patientSpeech": "Doctor, my sugar is not controlled with one medicine.",
    "diagnosis": "Maturity Onset Diabetes Mellitus Uncontrolled By Monotherapy",
    "age": 32,
    "sex": "Female",
    "prescriptionSections": {
      "drug": "Glipizide + Metformin",
      "dose": "5mg + 60 tablets + 500mg",
      "dispense": "60 tablets",
      "route": "Oral",
      "frequency": "Twice daily before + Twice daily after",
      "instructions": "One tablet to be taken twice daily before food + One tablet to be taken twice daily after food"
    },
    "correctAnswers": {
      "drug": "Glipizide + Metformin",
      "dose": "5mg + 60 tablets + 500mg",
      "dispense": "60 tablets",
      "route": "Oral",
      "frequency": "Twice daily before + Twice daily after",
      "instructions": "One tablet to be taken twice daily before food + One tablet to be taken twice daily after food"
    },
    "explanations": {
      "drug": "Drug should match the prescription recommended for Maturity Onset Diabetes Mellitus Uncontrolled By Monotherapy.",
      "dose": "Dose should match the prescription recommended for Maturity Onset Diabetes Mellitus Uncontrolled By Monotherapy.",
      "dispense": "Dispense should match the prescription recommended for Maturity Onset Diabetes Mellitus Uncontrolled By Monotherapy.",
      "route": "Route should match the prescription recommended for Maturity Onset Diabetes Mellitus Uncontrolled By Monotherapy.",
      "frequency": "Frequency should match the prescription recommended for Maturity Onset Diabetes Mellitus Uncontrolled By Monotherapy.",
      "instructions": "Instructions should match the prescription recommended for Maturity Onset Diabetes Mellitus Uncontrolled By Monotherapy."
    },
    "options": {
      "drug": [
        "Glipizide + Metformin",
        "Adrenaline Hydrochloride + Methyl Prednisolone + Pheneramine Maleate",
        "Lorazepam + Fosphenytoin",
        "Albendazole + Ferrous Sulphate"
      ],
      "dose": [
        "5mg + 60 tablets + 500mg",
        "1:1000 + 1mg + 1 ampoule + 0.5ml",
        "4 mg + 2 ampoules + 1 ml + 2mg",
        "400mg + 200mg + 100 tablets + 100mg"
      ],
      "dispense": [
        "60 tablets",
        "1 ampoule + 1 vial 0 + 1 ampoule 1ml to be injected IV",
        "2 ampoules + 2 vials 15mg/kg to be infused slow IV over 30 mins (not to exceed 150 mg/min)",
        "One tablet + 100 tablets + 30 tablets"
      ],
      "route": [
        "Oral",
        "IM + Mouth rinse",
        "Mouth rinse",
        "Topical dental use"
      ],
      "frequency": [
        "Twice daily before + Twice daily after",
        "As clinically directed",
        "Thrice daily after + Once daily",
        "Thrice daily after + Once daily at"
      ],
      "instructions": [
        "One tablet to be taken twice daily before food + One tablet to be taken twice daily after food",
        "To be injected IM + To be injected IV",
        "To be injected slow IV( at the rate of 2mg/min) To be repeated after 10 mins if needed + To be infused slow IV over 30 mins (not to exceed 150 mg/min)",
        "One tablet + One tablet to be taken at bedtime"
      ]
    }
  },
  {
    "caseId": "case-9",
    "patientSpeech": "Doctor, I suddenly felt faint and breathless after the injection.",
    "diagnosis": "Severe Anaphylactic Shock Due To Procaine Penicillin Injection",
    "age": 39,
    "sex": "Male",
    "prescriptionSections": {
      "drug": "Adrenaline Hydrochloride + Methyl Prednisolone + Pheneramine Maleate",
      "dose": "1:1000 + 1mg + 1 ampoule + 0.5ml",
      "dispense": "1 ampoule + 1 vial 0 + 1 ampoule 1ml to be injected IV",
      "route": "IV + IM",
      "frequency": "As clinically directed",
      "instructions": "To be injected IM + To be injected IV"
    },
    "correctAnswers": {
      "drug": "Adrenaline Hydrochloride + Methyl Prednisolone + Pheneramine Maleate",
      "dose": "1:1000 + 1mg + 1 ampoule + 0.5ml",
      "dispense": "1 ampoule + 1 vial 0 + 1 ampoule 1ml to be injected IV",
      "route": "IV + IM",
      "frequency": "As clinically directed",
      "instructions": "To be injected IM + To be injected IV"
    },
    "explanations": {
      "drug": "Drug should match the prescription recommended for Severe Anaphylactic Shock Due To Procaine Penicillin Injection.",
      "dose": "Dose should match the prescription recommended for Severe Anaphylactic Shock Due To Procaine Penicillin Injection.",
      "dispense": "Dispense should match the prescription recommended for Severe Anaphylactic Shock Due To Procaine Penicillin Injection.",
      "route": "Route should match the prescription recommended for Severe Anaphylactic Shock Due To Procaine Penicillin Injection.",
      "frequency": "Frequency should match the prescription recommended for Severe Anaphylactic Shock Due To Procaine Penicillin Injection.",
      "instructions": "Instructions should match the prescription recommended for Severe Anaphylactic Shock Due To Procaine Penicillin Injection."
    },
    "options": {
      "drug": [
        "Adrenaline Hydrochloride + Methyl Prednisolone + Pheneramine Maleate",
        "Lorazepam + Fosphenytoin",
        "Albendazole + Ferrous Sulphate",
        "Ibuprofen + Diazepam + Local Application Of Clove Oil"
      ],
      "dose": [
        "1:1000 + 1mg + 1 ampoule + 0.5ml",
        "4 mg + 2 ampoules + 1 ml + 2mg",
        "400mg + 200mg + 100 tablets + 100mg",
        "400mg + 10 tablets + 10mg + 5 tablets"
      ],
      "dispense": [
        "1 ampoule + 1 vial 0 + 1 ampoule 1ml to be injected IV",
        "2 ampoules + 2 vials 15mg/kg to be infused slow IV over 30 mins (not to exceed 150 mg/min)",
        "One tablet + 100 tablets + 30 tablets",
        "10 tablets + 5 tablets"
      ],
      "route": [
        "IV + IM",
        "IV",
        "Oral",
        "Topical dental use"
      ],
      "frequency": [
        "As clinically directed",
        "Thrice daily after + Once daily",
        "Thrice daily after + Once daily at",
        "Twice daily"
      ],
      "instructions": [
        "To be injected IM + To be injected IV",
        "To be injected slow IV( at the rate of 2mg/min) To be repeated after 10 mins if needed + To be infused slow IV over 30 mins (not to exceed 150 mg/min)",
        "One tablet + One tablet to be taken at bedtime",
        "One tablet to be taken thrice daily after food for 3 days + One tablet once daily at bed time"
      ]
    }
  },
  {
    "caseId": "case-10",
    "patientSpeech": "Doctor, the seizure is not stopping.",
    "diagnosis": "Status Epilepticus",
    "age": 46,
    "sex": "Female",
    "prescriptionSections": {
      "drug": "Lorazepam + Fosphenytoin",
      "dose": "4 mg + 2 ampoules + 1 ml + 2mg",
      "dispense": "2 ampoules + 2 vials 15mg/kg to be infused slow IV over 30 mins (not to exceed 150 mg/min)",
      "route": "IV",
      "frequency": "As clinically directed",
      "instructions": "To be injected slow IV( at the rate of 2mg/min) To be repeated after 10 mins if needed + To be infused slow IV over 30 mins (not to exceed 150 mg/min)"
    },
    "correctAnswers": {
      "drug": "Lorazepam + Fosphenytoin",
      "dose": "4 mg + 2 ampoules + 1 ml + 2mg",
      "dispense": "2 ampoules + 2 vials 15mg/kg to be infused slow IV over 30 mins (not to exceed 150 mg/min)",
      "route": "IV",
      "frequency": "As clinically directed",
      "instructions": "To be injected slow IV( at the rate of 2mg/min) To be repeated after 10 mins if needed + To be infused slow IV over 30 mins (not to exceed 150 mg/min)"
    },
    "explanations": {
      "drug": "Drug should match the prescription recommended for Status Epilepticus.",
      "dose": "Dose should match the prescription recommended for Status Epilepticus.",
      "dispense": "Dispense should match the prescription recommended for Status Epilepticus.",
      "route": "Route should match the prescription recommended for Status Epilepticus.",
      "frequency": "Frequency should match the prescription recommended for Status Epilepticus.",
      "instructions": "Instructions should match the prescription recommended for Status Epilepticus."
    },
    "options": {
      "drug": [
        "Lorazepam + Fosphenytoin",
        "Albendazole + Ferrous Sulphate",
        "Ibuprofen + Diazepam + Local Application Of Clove Oil",
        "Pethidine"
      ],
      "dose": [
        "4 mg + 2 ampoules + 1 ml + 2mg",
        "400mg + 200mg + 100 tablets + 100mg",
        "400mg + 10 tablets + 10mg + 5 tablets",
        "100mg + 2 ampoules + 1ml"
      ],
      "dispense": [
        "2 ampoules + 2 vials 15mg/kg to be infused slow IV over 30 mins (not to exceed 150 mg/min)",
        "One tablet + 100 tablets + 30 tablets",
        "10 tablets + 5 tablets",
        "2 ampoules"
      ],
      "route": [
        "IV",
        "Oral",
        "Topical dental use",
        "IM + Mouth rinse"
      ],
      "frequency": [
        "As clinically directed",
        "Thrice daily after + Once daily at",
        "Twice daily",
        "Twice daily after + 1-3 times daily"
      ],
      "instructions": [
        "To be injected slow IV( at the rate of 2mg/min) To be repeated after 10 mins if needed + To be infused slow IV over 30 mins (not to exceed 150 mg/min)",
        "One tablet + One tablet to be taken at bedtime",
        "One tablet to be taken thrice daily after food for 3 days + One tablet once daily at bed time",
        "To be injected slow IV twice daily"
      ]
    }
  },
  {
    "caseId": "case-11",
    "patientSpeech": "Doctor, I feel weak and tired all the time.",
    "diagnosis": "Iron Deficiency Anemia Due To Hookworm Infestation",
    "age": 53,
    "sex": "Male",
    "prescriptionSections": {
      "drug": "Albendazole + Ferrous Sulphate",
      "dose": "400mg + 200mg + 100 tablets + 100mg",
      "dispense": "One tablet + 100 tablets + 30 tablets",
      "route": "Oral",
      "frequency": "Thrice daily after + Once daily",
      "instructions": "One tablet + One tablet to be taken at bedtime"
    },
    "correctAnswers": {
      "drug": "Albendazole + Ferrous Sulphate",
      "dose": "400mg + 200mg + 100 tablets + 100mg",
      "dispense": "One tablet + 100 tablets + 30 tablets",
      "route": "Oral",
      "frequency": "Thrice daily after + Once daily",
      "instructions": "One tablet + One tablet to be taken at bedtime"
    },
    "explanations": {
      "drug": "Drug should match the prescription recommended for Iron Deficiency Anemia Due To Hookworm Infestation.",
      "dose": "Dose should match the prescription recommended for Iron Deficiency Anemia Due To Hookworm Infestation.",
      "dispense": "Dispense should match the prescription recommended for Iron Deficiency Anemia Due To Hookworm Infestation.",
      "route": "Route should match the prescription recommended for Iron Deficiency Anemia Due To Hookworm Infestation.",
      "frequency": "Frequency should match the prescription recommended for Iron Deficiency Anemia Due To Hookworm Infestation.",
      "instructions": "Instructions should match the prescription recommended for Iron Deficiency Anemia Due To Hookworm Infestation."
    },
    "options": {
      "drug": [
        "Albendazole + Ferrous Sulphate",
        "Ibuprofen + Diazepam + Local Application Of Clove Oil",
        "Pethidine",
        "Procaine Penicillin + Diclofenac Sodium + Chloroxylenol Mouth Wash"
      ],
      "dose": [
        "400mg + 200mg + 100 tablets + 100mg",
        "400mg + 10 tablets + 10mg + 5 tablets",
        "100mg + 2 ampoules + 1ml",
        "4 lakh units + 5 vials + 1 vial + 50mg"
      ],
      "dispense": [
        "One tablet + 100 tablets + 30 tablets",
        "10 tablets + 5 tablets",
        "2 ampoules",
        "5 vials + 10 tabs + 1 bottle"
      ],
      "route": [
        "Oral",
        "Topical dental use",
        "Mouth rinse",
        "IV + Nebulized/Inhalation"
      ],
      "frequency": [
        "Thrice daily after + Once daily",
        "Thrice daily after + Once daily at",
        "Twice daily",
        "Twice daily after + 1-3 times daily"
      ],
      "instructions": [
        "One tablet + One tablet to be taken at bedtime",
        "One tablet to be taken thrice daily after food for 3 days + One tablet once daily at bed time",
        "To be injected slow IV twice daily",
        "Contents of 1 vial to be injected IM daily for 5 days + To be injected IM daily for 5 days"
      ]
    }
  },
  {
    "caseId": "case-12",
    "patientSpeech": "Doctor, my tooth hurts so much I cannot sleep.",
    "diagnosis": "Insomnia Due To Toothache",
    "age": 60,
    "sex": "Female",
    "prescriptionSections": {
      "drug": "Ibuprofen + Diazepam + Local Application Of Clove Oil",
      "dose": "400mg + 10 tablets + 10mg + 5 tablets",
      "dispense": "10 tablets + 5 tablets",
      "route": "Topical dental use",
      "frequency": "Thrice daily after + Once daily at",
      "instructions": "One tablet to be taken thrice daily after food for 3 days + One tablet once daily at bed time"
    },
    "correctAnswers": {
      "drug": "Ibuprofen + Diazepam + Local Application Of Clove Oil",
      "dose": "400mg + 10 tablets + 10mg + 5 tablets",
      "dispense": "10 tablets + 5 tablets",
      "route": "Topical dental use",
      "frequency": "Thrice daily after + Once daily at",
      "instructions": "One tablet to be taken thrice daily after food for 3 days + One tablet once daily at bed time"
    },
    "explanations": {
      "drug": "Drug should match the prescription recommended for Insomnia Due To Toothache.",
      "dose": "Dose should match the prescription recommended for Insomnia Due To Toothache.",
      "dispense": "Dispense should match the prescription recommended for Insomnia Due To Toothache.",
      "route": "Route should match the prescription recommended for Insomnia Due To Toothache.",
      "frequency": "Frequency should match the prescription recommended for Insomnia Due To Toothache.",
      "instructions": "Instructions should match the prescription recommended for Insomnia Due To Toothache."
    },
    "options": {
      "drug": [
        "Ibuprofen + Diazepam + Local Application Of Clove Oil",
        "Pethidine",
        "Procaine Penicillin + Diclofenac Sodium + Chloroxylenol Mouth Wash",
        "Clotrimazole Troche"
      ],
      "dose": [
        "400mg + 10 tablets + 10mg + 5 tablets",
        "100mg + 2 ampoules + 1ml",
        "4 lakh units + 5 vials + 1 vial + 50mg",
        "10mg + 56 troches"
      ],
      "dispense": [
        "10 tablets + 5 tablets",
        "2 ampoules",
        "5 vials + 10 tabs + 1 bottle",
        "56 troches"
      ],
      "route": [
        "Topical dental use",
        "IV",
        "IM + Mouth rinse",
        "Mouth rinse"
      ],
      "frequency": [
        "Thrice daily after + Once daily at",
        "Twice daily",
        "Twice daily after + 1-3 times daily",
        "4 times a day"
      ],
      "instructions": [
        "One tablet to be taken thrice daily after food for 3 days + One tablet once daily at bed time",
        "To be injected slow IV twice daily",
        "Contents of 1 vial to be injected IM daily for 5 days + To be injected IM daily for 5 days",
        "One troche to be kept in mouth until dissolution 4 times a day for 14 days + To be kept in mouth until dissolution 4 times a day for 14 days"
      ]
    }
  },
  {
    "caseId": "case-13",
    "patientSpeech": "Doctor, my jaw is fractured and the pain is severe.",
    "diagnosis": "Acute Intractable Pain Due To Fractured Mandible",
    "age": 67,
    "sex": "Male",
    "prescriptionSections": {
      "drug": "Pethidine",
      "dose": "100mg + 2 ampoules + 1ml",
      "dispense": "2 ampoules",
      "route": "IV",
      "frequency": "Twice daily",
      "instructions": "To be injected slow IV twice daily"
    },
    "correctAnswers": {
      "drug": "Pethidine",
      "dose": "100mg + 2 ampoules + 1ml",
      "dispense": "2 ampoules",
      "route": "IV",
      "frequency": "Twice daily",
      "instructions": "To be injected slow IV twice daily"
    },
    "explanations": {
      "drug": "Drug should match the prescription recommended for Acute Intractable Pain Due To Fractured Mandible.",
      "dose": "Dose should match the prescription recommended for Acute Intractable Pain Due To Fractured Mandible.",
      "dispense": "Dispense should match the prescription recommended for Acute Intractable Pain Due To Fractured Mandible.",
      "route": "Route should match the prescription recommended for Acute Intractable Pain Due To Fractured Mandible.",
      "frequency": "Frequency should match the prescription recommended for Acute Intractable Pain Due To Fractured Mandible.",
      "instructions": "Instructions should match the prescription recommended for Acute Intractable Pain Due To Fractured Mandible."
    },
    "options": {
      "drug": [
        "Pethidine",
        "Procaine Penicillin + Diclofenac Sodium + Chloroxylenol Mouth Wash",
        "Clotrimazole Troche",
        "Potassium Nitrate"
      ],
      "dose": [
        "100mg + 2 ampoules + 1ml",
        "4 lakh units + 5 vials + 1 vial + 50mg",
        "10mg + 56 troches",
        "As directed for this prescription"
      ],
      "dispense": [
        "2 ampoules",
        "5 vials + 10 tabs + 1 bottle",
        "56 troches",
        "Sufficient quantity"
      ],
      "route": [
        "IV",
        "Mouth rinse",
        "Topical dental use",
        "Oral"
      ],
      "frequency": [
        "Twice daily",
        "4 times a day",
        "2-3 times daily",
        "Twice daily for + 2-3 times daily"
      ],
      "instructions": [
        "To be injected slow IV twice daily",
        "Contents of 1 vial to be injected IM daily for 5 days + To be injected IM daily for 5 days",
        "One troche to be kept in mouth until dissolution 4 times a day for 14 days + To be kept in mouth until dissolution 4 times a day for 14 days",
        "Use the paste to brush teeth 2-3 times daily"
      ]
    }
  },
  {
    "caseId": "case-14",
    "patientSpeech": "Doctor, my gums hurt and feel swollen.",
    "diagnosis": "Gingival Abscess",
    "age": 28,
    "sex": "Female",
    "prescriptionSections": {
      "drug": "Procaine Penicillin + Diclofenac Sodium + Chloroxylenol Mouth Wash",
      "dose": "4 lakh units + 5 vials + 1 vial + 50mg",
      "dispense": "5 vials + 10 tabs + 1 bottle",
      "route": "IM + Mouth rinse",
      "frequency": "Twice daily after + 1-3 times daily",
      "instructions": "Contents of 1 vial to be injected IM daily for 5 days + To be injected IM daily for 5 days"
    },
    "correctAnswers": {
      "drug": "Procaine Penicillin + Diclofenac Sodium + Chloroxylenol Mouth Wash",
      "dose": "4 lakh units + 5 vials + 1 vial + 50mg",
      "dispense": "5 vials + 10 tabs + 1 bottle",
      "route": "IM + Mouth rinse",
      "frequency": "Twice daily after + 1-3 times daily",
      "instructions": "Contents of 1 vial to be injected IM daily for 5 days + To be injected IM daily for 5 days"
    },
    "explanations": {
      "drug": "Drug should match the prescription recommended for Gingival Abscess.",
      "dose": "Dose should match the prescription recommended for Gingival Abscess.",
      "dispense": "Dispense should match the prescription recommended for Gingival Abscess.",
      "route": "Route should match the prescription recommended for Gingival Abscess.",
      "frequency": "Frequency should match the prescription recommended for Gingival Abscess.",
      "instructions": "Instructions should match the prescription recommended for Gingival Abscess."
    },
    "options": {
      "drug": [
        "Procaine Penicillin + Diclofenac Sodium + Chloroxylenol Mouth Wash",
        "Clotrimazole Troche",
        "Potassium Nitrate",
        "Famciclovir + Compound Iodine Paint Applied Locally"
      ],
      "dose": [
        "4 lakh units + 5 vials + 1 vial + 50mg",
        "10mg + 56 troches",
        "As directed for this prescription",
        "500mg + 14 tablets"
      ],
      "dispense": [
        "5 vials + 10 tabs + 1 bottle",
        "56 troches",
        "Sufficient quantity",
        "14 tablets"
      ],
      "route": [
        "IM + Mouth rinse",
        "Mouth rinse",
        "Topical dental use",
        "Oral"
      ],
      "frequency": [
        "Twice daily after + 1-3 times daily",
        "4 times a day",
        "2-3 times daily",
        "Twice daily for + 2-3 times daily"
      ],
      "instructions": [
        "Contents of 1 vial to be injected IM daily for 5 days + To be injected IM daily for 5 days",
        "One troche to be kept in mouth until dissolution 4 times a day for 14 days + To be kept in mouth until dissolution 4 times a day for 14 days",
        "Use the paste to brush teeth 2-3 times daily",
        "One tablet twice daily for 7 days"
      ]
    }
  },
  {
    "caseId": "case-15",
    "patientSpeech": "Doctor, I have white painful patches in my mouth.",
    "diagnosis": "Oral Thrush",
    "age": 35,
    "sex": "Male",
    "prescriptionSections": {
      "drug": "Clotrimazole Troche",
      "dose": "10mg + 56 troches",
      "dispense": "56 troches",
      "route": "Mouth rinse",
      "frequency": "4 times a day",
      "instructions": "One troche to be kept in mouth until dissolution 4 times a day for 14 days + To be kept in mouth until dissolution 4 times a day for 14 days"
    },
    "correctAnswers": {
      "drug": "Clotrimazole Troche",
      "dose": "10mg + 56 troches",
      "dispense": "56 troches",
      "route": "Mouth rinse",
      "frequency": "4 times a day",
      "instructions": "One troche to be kept in mouth until dissolution 4 times a day for 14 days + To be kept in mouth until dissolution 4 times a day for 14 days"
    },
    "explanations": {
      "drug": "Drug should match the prescription recommended for Oral Thrush.",
      "dose": "Dose should match the prescription recommended for Oral Thrush.",
      "dispense": "Dispense should match the prescription recommended for Oral Thrush.",
      "route": "Route should match the prescription recommended for Oral Thrush.",
      "frequency": "Frequency should match the prescription recommended for Oral Thrush.",
      "instructions": "Instructions should match the prescription recommended for Oral Thrush."
    },
    "options": {
      "drug": [
        "Clotrimazole Troche",
        "Potassium Nitrate",
        "Famciclovir + Compound Iodine Paint Applied Locally",
        "Ascorbic Acid"
      ],
      "dose": [
        "10mg + 56 troches",
        "As directed for this prescription",
        "500mg + 14 tablets",
        "500mg"
      ],
      "dispense": [
        "56 troches",
        "Sufficient quantity",
        "14 tablets",
        "30 chewable tablets"
      ],
      "route": [
        "Mouth rinse",
        "Topical dental use",
        "Oral",
        "IV + Nebulized/Inhalation"
      ],
      "frequency": [
        "4 times a day",
        "2-3 times daily",
        "Twice daily for + 2-3 times daily",
        "Twice daily"
      ],
      "instructions": [
        "One troche to be kept in mouth until dissolution 4 times a day for 14 days + To be kept in mouth until dissolution 4 times a day for 14 days",
        "Use the paste to brush teeth 2-3 times daily",
        "One tablet twice daily for 7 days",
        "One tablet to be chewed twice daily + To be chewed twice daily"
      ]
    }
  },
  {
    "caseId": "case-16",
    "patientSpeech": "Doctor, my teeth hurt with cold food and drinks.",
    "diagnosis": "Hypersensitive Dentine",
    "age": 42,
    "sex": "Female",
    "prescriptionSections": {
      "drug": "Potassium Nitrate",
      "dose": "As directed for this prescription",
      "dispense": "Sufficient quantity",
      "route": "Topical dental use",
      "frequency": "2-3 times daily",
      "instructions": "Use the paste to brush teeth 2-3 times daily"
    },
    "correctAnswers": {
      "drug": "Potassium Nitrate",
      "dose": "As directed for this prescription",
      "dispense": "Sufficient quantity",
      "route": "Topical dental use",
      "frequency": "2-3 times daily",
      "instructions": "Use the paste to brush teeth 2-3 times daily"
    },
    "explanations": {
      "drug": "Drug should match the prescription recommended for Hypersensitive Dentine.",
      "dose": "Dose should match the prescription recommended for Hypersensitive Dentine.",
      "dispense": "Dispense should match the prescription recommended for Hypersensitive Dentine.",
      "route": "Route should match the prescription recommended for Hypersensitive Dentine.",
      "frequency": "Frequency should match the prescription recommended for Hypersensitive Dentine.",
      "instructions": "Instructions should match the prescription recommended for Hypersensitive Dentine."
    },
    "options": {
      "drug": [
        "Potassium Nitrate",
        "Famciclovir + Compound Iodine Paint Applied Locally",
        "Ascorbic Acid",
        "Adrenaline"
      ],
      "dose": [
        "As directed for this prescription",
        "500mg + 14 tablets",
        "500mg",
        "1mg + 10ml + 1: 10 + 1:10"
      ],
      "dispense": [
        "Sufficient quantity",
        "14 tablets",
        "30 chewable tablets",
        "20 tablets"
      ],
      "route": [
        "Topical dental use",
        "Mouth rinse",
        "Oral",
        "IV + Nebulized/Inhalation"
      ],
      "frequency": [
        "2-3 times daily",
        "Twice daily for + 2-3 times daily",
        "Twice daily",
        "As clinically directed"
      ],
      "instructions": [
        "Use the paste to brush teeth 2-3 times daily",
        "One tablet twice daily for 7 days",
        "One tablet to be chewed twice daily + To be chewed twice daily",
        "To be packed into the tooth socket"
      ]
    }
  },
  {
    "caseId": "case-17",
    "patientSpeech": "Doctor, my gums are sore with painful mouth ulcers.",
    "diagnosis": "Herpetic Gingivitis",
    "age": 49,
    "sex": "Male",
    "prescriptionSections": {
      "drug": "Famciclovir + Compound Iodine Paint Applied Locally",
      "dose": "500mg + 14 tablets",
      "dispense": "14 tablets",
      "route": "Topical dental use",
      "frequency": "Twice daily for + 2-3 times daily",
      "instructions": "One tablet twice daily for 7 days"
    },
    "correctAnswers": {
      "drug": "Famciclovir + Compound Iodine Paint Applied Locally",
      "dose": "500mg + 14 tablets",
      "dispense": "14 tablets",
      "route": "Topical dental use",
      "frequency": "Twice daily for + 2-3 times daily",
      "instructions": "One tablet twice daily for 7 days"
    },
    "explanations": {
      "drug": "Drug should match the prescription recommended for Herpetic Gingivitis.",
      "dose": "Dose should match the prescription recommended for Herpetic Gingivitis.",
      "dispense": "Dispense should match the prescription recommended for Herpetic Gingivitis.",
      "route": "Route should match the prescription recommended for Herpetic Gingivitis.",
      "frequency": "Frequency should match the prescription recommended for Herpetic Gingivitis.",
      "instructions": "Instructions should match the prescription recommended for Herpetic Gingivitis."
    },
    "options": {
      "drug": [
        "Famciclovir + Compound Iodine Paint Applied Locally",
        "Ascorbic Acid",
        "Adrenaline",
        "Chlorhexidine Mouth Wash"
      ],
      "dose": [
        "500mg + 14 tablets",
        "500mg",
        "1mg + 10ml + 1: 10 + 1:10",
        "30ml + 1:1"
      ],
      "dispense": [
        "14 tablets",
        "30 chewable tablets",
        "Sufficient quantity",
        "20 tablets"
      ],
      "route": [
        "Topical dental use",
        "Oral",
        "IV + Nebulized/Inhalation",
        "Sublingual"
      ],
      "frequency": [
        "Twice daily for + 2-3 times daily",
        "Twice daily",
        "As clinically directed",
        "2-3 times daily"
      ],
      "instructions": [
        "One tablet twice daily for 7 days",
        "One tablet to be chewed twice daily + To be chewed twice daily",
        "To be packed into the tooth socket",
        "To be rinsed 2-3 times daily after food"
      ]
    }
  },
  {
    "caseId": "case-18",
    "patientSpeech": "Doctor, my gums bleed and I feel very weak.",
    "diagnosis": "Scurvy",
    "age": 56,
    "sex": "Female",
    "prescriptionSections": {
      "drug": "Ascorbic Acid",
      "dose": "500mg",
      "dispense": "30 chewable tablets",
      "route": "Oral",
      "frequency": "Twice daily",
      "instructions": "One tablet to be chewed twice daily + To be chewed twice daily"
    },
    "correctAnswers": {
      "drug": "Ascorbic Acid",
      "dose": "500mg",
      "dispense": "30 chewable tablets",
      "route": "Oral",
      "frequency": "Twice daily",
      "instructions": "One tablet to be chewed twice daily + To be chewed twice daily"
    },
    "explanations": {
      "drug": "Drug should match the prescription recommended for Scurvy.",
      "dose": "Dose should match the prescription recommended for Scurvy.",
      "dispense": "Dispense should match the prescription recommended for Scurvy.",
      "route": "Route should match the prescription recommended for Scurvy.",
      "frequency": "Frequency should match the prescription recommended for Scurvy.",
      "instructions": "Instructions should match the prescription recommended for Scurvy."
    },
    "options": {
      "drug": [
        "Ascorbic Acid",
        "Adrenaline",
        "Chlorhexidine Mouth Wash",
        "Cevimeline"
      ],
      "dose": [
        "500mg",
        "1mg + 10ml + 1: 10 + 1:10",
        "30ml + 1:1",
        "30mg + 20 tablets + 1 tablet"
      ],
      "dispense": [
        "30 chewable tablets",
        "Sufficient quantity",
        "20 tablets",
        "1 vial Nebulize 1ml diluted with saline (followed by) -Salbutamol Inhaler 100mcg/md(metered dose) Dispense + 1 vial 0"
      ],
      "route": [
        "Oral",
        "IV + Nebulized/Inhalation",
        "Sublingual",
        "IV + IM"
      ],
      "frequency": [
        "Twice daily",
        "As clinically directed",
        "2-3 times daily",
        "Every 6 hrs + 4 times daily"
      ],
      "instructions": [
        "One tablet to be chewed twice daily + To be chewed twice daily",
        "To be packed into the tooth socket",
        "To be rinsed 2-3 times daily after food",
        "Follow the written prescription directions"
      ]
    }
  },
  {
    "caseId": "case-19",
    "patientSpeech": "Doctor, the tooth socket is bleeding after extraction.",
    "diagnosis": "Bleeding Due To Tooth Extraction",
    "age": 63,
    "sex": "Male",
    "prescriptionSections": {
      "drug": "Adrenaline",
      "dose": "1mg + 10ml + 1: 10 + 1:10",
      "dispense": "Sufficient quantity",
      "route": "Topical dental use",
      "frequency": "As clinically directed",
      "instructions": "To be packed into the tooth socket"
    },
    "correctAnswers": {
      "drug": "Adrenaline",
      "dose": "1mg + 10ml + 1: 10 + 1:10",
      "dispense": "Sufficient quantity",
      "route": "Topical dental use",
      "frequency": "As clinically directed",
      "instructions": "To be packed into the tooth socket"
    },
    "explanations": {
      "drug": "Drug should match the prescription recommended for Bleeding Due To Tooth Extraction.",
      "dose": "Dose should match the prescription recommended for Bleeding Due To Tooth Extraction.",
      "dispense": "Dispense should match the prescription recommended for Bleeding Due To Tooth Extraction.",
      "route": "Route should match the prescription recommended for Bleeding Due To Tooth Extraction.",
      "frequency": "Frequency should match the prescription recommended for Bleeding Due To Tooth Extraction.",
      "instructions": "Instructions should match the prescription recommended for Bleeding Due To Tooth Extraction."
    },
    "options": {
      "drug": [
        "Adrenaline",
        "Chlorhexidine Mouth Wash",
        "Cevimeline",
        "Sodium Fluoride Containing Tooth Paste"
      ],
      "dose": [
        "1mg + 10ml + 1: 10 + 1:10",
        "30ml + 1:1",
        "30mg + 20 tablets + 1 tablet",
        "As directed for this prescription"
      ],
      "dispense": [
        "Sufficient quantity",
        "1 vial Nebulize 1ml diluted with saline (followed by) -Salbutamol Inhaler 100mcg/md(metered dose) Dispense + 1 vial 0",
        "30 tablets",
        "7 tablets + 14 tablets"
      ],
      "route": [
        "Topical dental use",
        "IV + Nebulized/Inhalation",
        "Oral",
        "Sublingual"
      ],
      "frequency": [
        "As clinically directed",
        "Every 6 hrs + 4 times daily",
        "Once daily + Once daily Case",
        "Once daily + Once daily early + Twice daily"
      ],
      "instructions": [
        "To be packed into the tooth socket",
        "To be rinsed 2-3 times daily after food",
        "Follow the written prescription directions",
        "To be used to brush teeth 2-3 times daily after food"
      ]
    }
  },
  {
    "caseId": "case-20",
    "patientSpeech": "Doctor, I have bad breath that will not go away.",
    "diagnosis": "Halitosis",
    "age": 24,
    "sex": "Female",
    "prescriptionSections": {
      "drug": "Chlorhexidine Mouth Wash",
      "dose": "30ml + 1:1",
      "dispense": "Sufficient quantity",
      "route": "Mouth rinse",
      "frequency": "2-3 times daily",
      "instructions": "To be rinsed 2-3 times daily after food"
    },
    "correctAnswers": {
      "drug": "Chlorhexidine Mouth Wash",
      "dose": "30ml + 1:1",
      "dispense": "Sufficient quantity",
      "route": "Mouth rinse",
      "frequency": "2-3 times daily",
      "instructions": "To be rinsed 2-3 times daily after food"
    },
    "explanations": {
      "drug": "Drug should match the prescription recommended for Halitosis.",
      "dose": "Dose should match the prescription recommended for Halitosis.",
      "dispense": "Dispense should match the prescription recommended for Halitosis.",
      "route": "Route should match the prescription recommended for Halitosis.",
      "frequency": "Frequency should match the prescription recommended for Halitosis.",
      "instructions": "Instructions should match the prescription recommended for Halitosis."
    },
    "options": {
      "drug": [
        "Chlorhexidine Mouth Wash",
        "Cevimeline",
        "Sodium Fluoride Containing Tooth Paste",
        "Salbutamol + Salbutamol Inhaler + Methyl Prednisolone"
      ],
      "dose": [
        "30ml + 1:1",
        "30mg + 20 tablets + 1 tablet",
        "As directed for this prescription",
        "5mg + 1 vial + 1ml + 100mcg"
      ],
      "dispense": [
        "Sufficient quantity",
        "1 vial Nebulize 1ml diluted with saline (followed by) -Salbutamol Inhaler 100mcg/md(metered dose) Dispense + 1 vial 0",
        "30 tablets",
        "7 tablets + 14 tablets"
      ],
      "route": [
        "Mouth rinse",
        "Topical dental use",
        "IV + Nebulized/Inhalation",
        "Oral"
      ],
      "frequency": [
        "2-3 times daily",
        "Every 6 hrs + 4 times daily",
        "Once daily + Once daily Case",
        "Once daily + Once daily early + Twice daily"
      ],
      "instructions": [
        "To be rinsed 2-3 times daily after food",
        "Follow the written prescription directions",
        "To be used to brush teeth 2-3 times daily after food",
        "To be inhaled 4 times daily"
      ]
    }
  },
  {
    "caseId": "case-21",
    "patientSpeech": "Doctor, my mouth feels very dry after radiotherapy.",
    "diagnosis": "Xerostomia Due To Radiotherapy Of Neck",
    "age": 31,
    "sex": "Male",
    "prescriptionSections": {
      "drug": "Cevimeline",
      "dose": "30mg + 20 tablets + 1 tablet",
      "dispense": "20 tablets",
      "route": "Oral",
      "frequency": "As clinically directed",
      "instructions": "Follow the written prescription directions"
    },
    "correctAnswers": {
      "drug": "Cevimeline",
      "dose": "30mg + 20 tablets + 1 tablet",
      "dispense": "20 tablets",
      "route": "Oral",
      "frequency": "As clinically directed",
      "instructions": "Follow the written prescription directions"
    },
    "explanations": {
      "drug": "Drug should match the prescription recommended for Xerostomia Due To Radiotherapy Of Neck.",
      "dose": "Dose should match the prescription recommended for Xerostomia Due To Radiotherapy Of Neck.",
      "dispense": "Dispense should match the prescription recommended for Xerostomia Due To Radiotherapy Of Neck.",
      "route": "Route should match the prescription recommended for Xerostomia Due To Radiotherapy Of Neck.",
      "frequency": "Frequency should match the prescription recommended for Xerostomia Due To Radiotherapy Of Neck.",
      "instructions": "Instructions should match the prescription recommended for Xerostomia Due To Radiotherapy Of Neck."
    },
    "options": {
      "drug": [
        "Cevimeline",
        "Sodium Fluoride Containing Tooth Paste",
        "Salbutamol + Salbutamol Inhaler + Methyl Prednisolone",
        "Amlodipine + Hydrochlorothiazide"
      ],
      "dose": [
        "30mg + 20 tablets + 1 tablet",
        "As directed for this prescription",
        "5mg + 1 vial + 1ml + 100mcg",
        "5mg + 30 tablets + 12.5mg"
      ],
      "dispense": [
        "20 tablets",
        "Sufficient quantity",
        "1 vial Nebulize 1ml diluted with saline (followed by) -Salbutamol Inhaler 100mcg/md(metered dose) Dispense + 1 vial 0",
        "30 tablets"
      ],
      "route": [
        "Oral",
        "IV + Nebulized/Inhalation",
        "Sublingual",
        "IV + IM"
      ],
      "frequency": [
        "As clinically directed",
        "Every 6 hrs + 4 times daily",
        "Once daily + Once daily Case",
        "Once daily + Once daily early + Twice daily"
      ],
      "instructions": [
        "Follow the written prescription directions",
        "To be used to brush teeth 2-3 times daily after food",
        "To be inhaled 4 times daily",
        "One tablet to be taken once daily + One tablet to be taken once daily Case to be reviewed after one week"
      ]
    }
  },
  {
    "caseId": "case-22",
    "patientSpeech": "Doctor, I want medicine to prevent tooth decay.",
    "diagnosis": "Dental Caries",
    "age": 38,
    "sex": "Female",
    "prescriptionSections": {
      "drug": "Sodium Fluoride Containing Tooth Paste",
      "dose": "As directed for this prescription",
      "dispense": "Sufficient quantity",
      "route": "Topical dental use",
      "frequency": "2-3 times daily",
      "instructions": "To be used to brush teeth 2-3 times daily after food"
    },
    "correctAnswers": {
      "drug": "Sodium Fluoride Containing Tooth Paste",
      "dose": "As directed for this prescription",
      "dispense": "Sufficient quantity",
      "route": "Topical dental use",
      "frequency": "2-3 times daily",
      "instructions": "To be used to brush teeth 2-3 times daily after food"
    },
    "explanations": {
      "drug": "Drug should match the prescription recommended for Dental Caries.",
      "dose": "Dose should match the prescription recommended for Dental Caries.",
      "dispense": "Dispense should match the prescription recommended for Dental Caries.",
      "route": "Route should match the prescription recommended for Dental Caries.",
      "frequency": "Frequency should match the prescription recommended for Dental Caries.",
      "instructions": "Instructions should match the prescription recommended for Dental Caries."
    },
    "options": {
      "drug": [
        "Sodium Fluoride Containing Tooth Paste",
        "Salbutamol + Salbutamol Inhaler + Methyl Prednisolone",
        "Amlodipine + Hydrochlorothiazide",
        "Enalapril + Frusemide + Metoprolol"
      ],
      "dose": [
        "As directed for this prescription",
        "5mg + 1 vial + 1ml + 100mcg",
        "5mg + 30 tablets + 12.5mg",
        "2.5mg + 7 tablets + 40mg + 20mg"
      ],
      "dispense": [
        "Sufficient quantity",
        "1 vial Nebulize 1ml diluted with saline (followed by) -Salbutamol Inhaler 100mcg/md(metered dose) Dispense + 1 vial 0",
        "30 tablets",
        "7 tablets + 14 tablets"
      ],
      "route": [
        "Topical dental use",
        "IV + Nebulized/Inhalation",
        "Oral",
        "Sublingual"
      ],
      "frequency": [
        "2-3 times daily",
        "Every 6 hrs + 4 times daily",
        "Once daily + Once daily Case",
        "Once daily + Once daily early + Twice daily"
      ],
      "instructions": [
        "To be used to brush teeth 2-3 times daily after food",
        "To be inhaled 4 times daily",
        "One tablet to be taken once daily + One tablet to be taken once daily Case to be reviewed after one week",
        "One tablet taken once daily + One tablet taken twice daily"
      ]
    }
  }
] satisfies PrescriptionCase[];
