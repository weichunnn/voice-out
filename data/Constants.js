const Constants = {
  comments: [
    {
      date: '01/01/2022',
      text: 'You suck so much, you spend so much money but do nothing at all',
      sentiment_label: 'NEG',
      agency: 'NASA',
      vote_score: 0,
    },
    {
      date: '01/01/2022',
      text: 'You are doing great! Jk you are old, my great-grandfater is more active that you are sadsad sad asd as d sa dsa d as dsa  You are doing great! Jk you are old, my great-grandfater is more active that you are You are doing great! Jk you are old, my great-grandfater is more active that you are',
      sentiment_label: 'POS',
      agency: 'POTUS',
      vote_score: 0,
    },
    {
      date: '01/01/2022',
      text: 'firefigthers are doing their job',
      sentiment_label: 'NEU',
      agency: 'Firestation',
      vote_score: 0,
    },
    {
      date: '01/01/2022',
      text: 'firefigthers are doing their job',
      sentiment_label: 'NEU',
      agency: 'Firestation',
      vote_score: 0,
    },
    {
      date: '01/01/2022',
      text: 'firefigthers are doing their job',
      sentiment_label: 'NEU',
      agency: 'Firestation',
      vote_score: 0,
    },
    {
      date: '01/01/2022',
      text: 'firefigthers are doing their job',
      sentiment_label: 'NEU',
      agency: 'Firestation',
      vote_score: 0,
    },
    {
      date: '01/01/2022',
      text: 'firefigthers are doing their job',
      sentiment_label: 'NEU',
      agency: 'Firestation',
      vote_score: 0,
    },
    {
      date: '01/01/2022',
      text: 'firefigthers are doing their job',
      sentiment_label: 'NEU',
      agency: 'Firestation',
      vote_score: 0,
    },
  ],
  state: [
    'AK - Alaska',
    'AL - Alabama',
    'AR - Arkansas',
    'AS - American Samoa',
    'AZ - Arizona',
    'CA - California',
    'CO - Colorado',
    'CT - Connecticut',
    'DC - District of Columbia',
    'DE - Delaware',
    'FL - Florida',
    'GA - Georgia',
    'GU - Guam',
    'HI - Hawaii',
    'IA - Iowa',
    'ID - Idaho',
    'IL - Illinois',
    'IN - Indiana',
    'KS - Kansas',
    'KY - Kentucky',
    'LA - Louisiana',
    'MA - Massachusetts',
    'MD - Maryland',
    'ME - Maine',
    'MI - Michigan',
    'MN - Minnesota',
    'MO - Missouri',
    'MS - Mississippi',
    'MT - Montana',
    'NC - North Carolina',
    'ND - North Dakota',
    'NE - Nebraska',
    'NH - New Hampshire',
    'NJ - New Jersey',
    'NM - New Mexico',
    'NV - Nevada',
    'NY - New York',
    'OH - Ohio',
    'OK - Oklahoma',
    'OR - Oregon',
    'PA - Pennsylvania',
    'PR - Puerto Rico',
    'RI - Rhode Island',
    'SC - South Carolina',
    'SD - South Dakota',
    'TN - Tennessee',
    'TX - Texas',
    'UT - Utah',
    'VA - Virginia',
    'VI - Virgin Islands',
    'VT - Vermont',
    'WA - Washington',
    'WI - Wisconsin',
    'WV - West Virginia',
    'WY - Wyoming',
  ],
  agencies: [
    'AbilityOne Commission',
    'Access Board',
    'Administration for Children and Families (ACF)',
    'Administration for Community Living',
    'Administration for Native Americans',
    'Administrative Conference of the United States',
    'Administrative Office of the U.S. Courts',
    'Advisory Council on Historic Preservation',
    'Africa Command',
    'African Development Foundation',
    'Agency for Global Media',
    'Agency for Healthcare Research and Quality (AHRQ)',
    'Agency for International Development (USAID)',
    'Agency for Toxic Substances and Disease Registry',
    'Agricultural Marketing Service (AMS)',
    'Agricultural Research Service',
    'Agriculture Department (USDA)',
    'Agriculture Library',
    'Air Force',
    'Air Force Reserve',
    'Alcohol and Tobacco Tax and Trade Bureau',
    'Alcohol, Tobacco, Firearms and Explosives Bureau (ATF)',
    'Alhurra TV',
    'American Battle Monuments Commission',
    'AmeriCorps',
    'AmeriCorps Seniors',
    'Amtrak (AMTRAK)',
    'Animal and Plant Health Inspection Service (APHIS)',
    'Antitrust Division',
    'Appalachian Regional Commission',
    'Architect of the Capitol',
    'Archives, National Archives and Records Administration (NARA)',
    'Arctic Research Commission',
    'Armed Forces Retirement Home',
    'Arms Control and International Security',
    'Army',
    'Army Corps of Engineers',
    'Arthritis, Musculoskeletal and Skin Diseases, National Institute of',
    'Bankruptcy Courts',
    'Barry M. Goldwater Scholarship and Excellence in Education Program',
    'Bonneville Power Administration',
    'Botanic Garden',
    'Bureau of Alcohol and Tobacco Tax and Trade',
    'Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF)',
    'Bureau of Consular Affairs',
    'Bureau of Consumer Financial Protection',
    'Bureau of Economic Analysis (BEA)',
    'Bureau of Engraving and Printing (BEP)',
    'Bureau of Indian Affairs',
    'Bureau of Industry and Security (BIS)',
    'Bureau of International Labor Affairs',
    'Bureau of Justice Statistics',
    'Bureau of Labor Statistics',
    'Bureau of Land Management (BLM)',
    'Bureau of Ocean Energy Management',
    'Bureau of Prisons (BOP)',
    'Bureau of Reclamation',
    'Bureau of Safety and Environmental Enforcement (BSEE)',
    'Bureau of the Census',
    'Bureau of the Fiscal Service',
    'Bureau of Transportation Statistics',
    'Capitol Police',
    'Capitol Visitor Center',
    'Career, Technical, and Adult Education, Office of',
    'Census Bureau',
    'Center for Food Safety and Applied Nutrition',
    'Center for Nutrition Policy and Promotion (CNPP)',
    'Center for Parent Information and Resources (CPIR)',
    'Centers for Disease Control and Prevention (CDC)',
    'Centers for Medicare and Medicaid Services (CMS)',
    'Central Command (CENTCOM)',
    'Central Intelligence Agency (CIA)',
    'Chemical Safety Board',
    'Chief Acquisition Officers Council',
    'Chief Financial Officers Council',
    'Chief Human Capital Officers Council',
    'Chief Information Officers Council',
    'Child Support Enforcement, Office of (OCSE)',
    'Circuit Courts of Appeal',
    "Citizens' Stamp Advisory Committee",
    'Citizenship and Immigration Services (USCIS)',
    'Civil Rights Division, Department of Justice',
    'Civil Rights, Department of Education Office of',
    'Civil Rights, Department of Health and Human Services Office for',
    'Coast Guard',
    'College of Information and Cyberspace',
    'Commerce Department (DOC)',
    'Commission of Fine Arts',
    'Commission on Civil Rights',
    'Commission on International Religious Freedom',
    'Commission on Presidential Scholars',
    'Commission on Security and Cooperation in Europe (Helsinki Commission)',
    'Committee for the Implementation of Textile Agreements',
    'Committee on Foreign Investment in the United States',
    'Commodity Futures Trading Commission (CFTC)',
    'Community Oriented Policing Services (COPS)',
    'Community Planning and Development',
    'Comptroller of the Currency, Office of (OCC)',
    'Computer Emergency Readiness Team (US CERT)',
    'Congress—U.S. House of Representatives',
    'Congress—U.S. Senate',
    'Congressional Budget Office (CBO)',
    'Congressional Research Service',
    'Congressional Workplace Rights, Office of',
    'Consular Affairs, Bureau of',
    'Consumer Financial Protection Bureau',
    'Consumer Product Safety Commission (CPSC)',
    'Coordinating Council on Juvenile Justice and Delinquency Prevention',
    'Copyright Office',
    'Corps of Engineers',
    'Council of Economic Advisers',
    'Council of the Inspectors General on Integrity and Efficiency',
    'Council on Environmental Quality',
    'Court of Appeals for the Armed Forces',
    'Court of Appeals for the Federal Circuit',
    'Court of Appeals for Veterans Claims',
    'Court of Federal Claims',
    'Court of International Trade',
    'Court Services and Offender Supervision Agency for the District of Columbia',
    'Customs and Border Protection',
    'Cyber Command',
    'Cybersecurity and Infrastructure Security Agency (CISA)',
    'Debt and Claims Management Center',
    'Defense Acquisition University',
    'Defense Advanced Research Projects Agency (DARPA)',
    'Defense Commissary Agency',
    'Defense Contract Audit Agency',
    'Defense Contract Management Agency',
    'Defense Counterintelligence and Security Agency',
    'Defense Department (DOD)',
    'Defense Finance and Accounting Service (DFAS)',
    'Defense Finance and Accounting Service Debt and Claims Management Center',
    'Defense Health Agency',
    'Defense Information Systems Agency (DISA)',
    'Defense Intelligence Agency (DIA)',
    'Defense Logistics Agency (DLA)',
    'Defense Nuclear Facilities Safety Board',
    'Defense POW/MIA Accounting Agency',
    'Defense Security Cooperation Agency (DSCA)',
    'Defense Technical Information Center (DTIC)',
    'Defense Threat Reduction Agency (DTRA)',
    'Delaware River Basin Commission',
    'Delta Regional Authority',
    'Denali Commission',
    'Department of Agriculture (USDA)',
    'Department of Commerce (DOC)',
    'Department of Defense (DOD)',
    'Department of Education (ED)',
    'Department of Energy (DOE)',
    'Department of Health and Human Services (HHS)',
    'Department of Homeland Security (DHS)',
    'Department of Housing and Urban Development (HUD)',
    'Department of Justice (DOJ)',
    'Department of Labor (DOL)',
    'Department of State (DOS)',
    'Department of the Interior (DOI)',
    'Department of the Treasury',
    'Department of Transportation (DOT)',
    'Department of Veterans Affairs (VA)',
    'Director of National Intelligence, Office of',
    'Disability Employment Policy, Office of (ODEP)',
    'Drug Enforcement Administration (DEA)',
    'Dwight D. Eisenhower School for National Security and Resource Strategy',
    'Economic Analysis, Bureau of (BEA)',
    'Economic Development Administration (EDA)',
    'Economic Growth, Energy, and the Environment',
    'Economic Research Service',
    'Education Department (ED)',
    'Elder Justice Initiative',
    'Election Assistance Commission (EAC)',
    'Elementary and Secondary Education, Office of',
    'Employee Benefits Security Administration (EBSA)',
    'Employment and Training Administration',
    'Endangered Species Program',
    'Energy Department (DOE)',
    'Energy Information Administration',
    'Energy Star Program',
    'English Language Acquisition Office',
    'Engraving and Printing, Bureau of (BEP)',
    'Environmental Management, Office of',
    'Environmental Protection Agency (EPA)',
    'Equal Employment Opportunity Commission (EEOC)',
    'European Command',
    'Executive Office for Immigration Review',
    'Export-Import Bank of the United States',
    'Fair Housing and Equal Opportunity (FHEO)',
    'Fannie Mae',
    'Farm Credit Administration',
    'Farm Credit System Insurance Corporation',
    'Farm Service Agency',
    'Federal Accounting Standards Advisory Board',
    'Federal Aviation Administration (FAA)',
    'Federal Bureau of Investigation (FBI)',
    'Federal Bureau of Prisons (BOP)',
    'Federal Citizen Information Center',
    'Federal Communications Commission (FCC)',
    'Federal Consulting Group',
    'Federal Court Interpreters',
    'Federal Deposit Insurance Corporation (FDIC)',
    'Federal Election Commission',
    'Federal Emergency Management Agency (FEMA)',
    'Federal Energy Regulatory Commission',
    'Federal Executive Boards',
    'Federal Financial Institutions Examination Council',
    'Federal Financing Bank',
    'Federal Geographic Data Committee',
    'Federal Highway Administration (FHA)',
    'Federal Home Loan Mortgage Corporation (Freddie Mac)',
    'Federal Housing Administration (FHA)',
    'Federal Housing Finance Agency',
    'Federal Interagency Council on Statistical Policy',
    'Federal Judicial Center',
    'Federal Labor Relations Authority (FLRA)',
    'Federal Laboratory Consortium for Technology Transfer',
    'Federal Law Enforcement Training Center (FLETC)',
    'Federal Library and Information Center Committee',
    'Federal Maritime Commission',
    'Federal Mediation and Conciliation Service',
    'Federal Mine Safety and Health Review Commission',
    'Federal Motor Carrier Safety Administration (FMCSA)',
    'Federal National Mortgage Association (Fannie Mae)',
    'Federal Protective Service',
    'Federal Railroad Administration (FRA)',
    'Federal Register',
    'Federal Reserve System',
    'Federal Retirement Thrift Investment Board',
    'Federal Student Aid Information Center',
    'Federal Trade Commission (FTC)',
    'Federal Transit Administration (FTA)',
    'Federal Voting Assistance Program',
    'FedStats',
    'Fire Administration (USFA)',
    'Fiscal Service, Bureau of the',
    'Fish and Wildlife Service (FWS)',
    'Fleet Forces Command',
    'Food and Agriculture, National Institute of (NIFA)',
    'Food and Drug Administration (FDA)',
    'Food and Nutrition Service',
    'Food Safety and Inspection Service',
    'Foreign Agricultural Service',
    'Foreign Claims Settlement Commission',
    'Forest Service',
    'Fossil Energy',
    'Freddie Mac',
    'Fulbright Foreign Scholarship Board',
    'General Services Administration (GSA)',
    'Geological Survey (USGS)',
    'Ginnie Mae',
    'Global Media, Agency for',
    'Government Accountability Office (GAO)',
    'Government Ethics, Office of (OGE)',
    'Government National Mortgage Association (Ginnie Mae)',
    'Government Publishing Office (GPO)',
    'Harry S. Truman Scholarship Foundation',
    'Health and Human Services Department (HHS)',
    'Health Resources and Services Administration',
    'Helsinki Commission',
    'Holocaust Memorial Museum',
    'Homeland Security Department (DHS)',
    'Hour and Wage Division (WHD)',
    'House of Representatives',
    'House Office of Inspector General',
    'House Office of the Clerk',
    'Housing and Urban Development, Department of (HUD)',
    'Housing Office',
    'Immigrant and Employee Rights Section (IER)',
    'Immigration and Citizenship Services (USCIS)',
    'Immigration and Customs Enforcement (ICE)',
    'Indian Affairs',
    'Indian Arts and Crafts Board',
    'Indian Health Service',
    'Indo-Pacific Command',
    'Indoor Air Quality (IAQ)',
    'Industrial College of the Armed Forces',
    'Industry and Security, Bureau of (BIS)',
    'Inspectors General',
    'Institute of Education Sciences',
    'Institute of Museum and Library Services',
    'Institute of Peace',
    'Inter-American Foundation',
    'Interagency Alternative Dispute Resolution Working Group',
    'Interagency Committee for the Management of Noxious and Exotic Weeds',
    'Interagency Council on Homelessness',
    'Interior Department (DOI)',
    'Internal Revenue Service (IRS)',
    'International Development Finance Corporation (DFC)',
    'International Labor Affairs, Bureau of',
    'International Trade Administration (ITA)',
    'International Trade Commission',
    'Interpol',
    'James Madison Memorial Fellowship Foundation',
    'Japan-United States Friendship Commission',
    'Job Corps',
    'John F. Kennedy Center for the Performing Arts',
    'Joint Board for the Enrollment of Actuaries',
    'Joint Chiefs of Staff',
    'Joint Congressional Committee on Inaugural Ceremonies',
    'Joint Fire Science Program',
    'Joint Forces Staff College',
    'Joint Military Intelligence College',
    'Joint Program Executive Office for Chemical and Biological Defense',
    'Judicial Circuit Courts of Appeal',
    'Judicial Panel on Multidistrict Litigation',
    'Justice Department (DOJ)',
    'Justice Programs, Office of',
    'Justice Statistics, Bureau of',
    'Juvenile Justice and Delinquency Prevention, Office of',
    'Kennedy Center',
    'Labor Department (DOL)',
    'Labor Statistics, Bureau of',
    'Land Management, Bureau of (BLM)',
    'Legal Services Corporation',
    'Library of Congress (LOC)',
    'Manufactured Housing Programs, Office of',
    'Marine Corps',
    'Marine Mammal Commission',
    'Maritime Administration (MARAD)',
    'Marshals Service',
    'Meat and Poultry Hotline',
    'Mediation and Conciliation Service',
    'Medicaid (CMS)',
    'Medicaid and CHIP Payment and Access Commission',
    'Medicare (CMS)',
    'Medicare Payment Advisory Commission',
    'Merit Systems Protection Board',
    'Middle East Broadcasting Networks',
    'Migratory Bird Conservation Commission',
    'Military Postal Service Agency',
    'Millennium Challenge Corporation',
    'Mine Safety and Health Administration (MSHA)',
    'Minority Business Development Agency',
    'Minority Health, Office of',
    'Mint',
    'Missile Defense Agency (MDA)',
    'Mississippi River Commission',
    'Morris K. Udall and Stewart L. Udall Foundation',
    'Multifamily Housing Office',
    'National Aeronautics and Space Administration (NASA)',
    'National Agricultural Statistics Service',
    'National Archives and Records Administration (NARA)',
    'National Cancer Institute (NCI)',
    'National Capital Planning Commission',
    'National Cemetery Administration',
    'National Center for Complementary and Integrative Health (NCCIH)',
    'National Constitution Center',
    'National Council on Disability',
    'National Credit Union Administration (NCUA)',
    'National Defense University',
    'National Defense University iCollege',
    'National Endowment for the Arts (NEA)',
    'National Endowment for the Humanities',
    'National Flood Insurance Program (NFIP)',
    'National Gallery of Art',
    'National Geospatial-Intelligence Agency',
    'National Guard',
    'National Health Information Center (NHIC)',
    'National Heart, Lung, and Blood Institute (NHLBI)',
    'National Highway Traffic Safety Administration (NHTSA)',
    'National Indian Gaming Commission',
    'National Institute of Arthritis, Musculoskeletal and Skin Diseases',
    'National Institute of Corrections',
    'National Institute of Deafness and Other Communication Disorders (NIDCD)',
    'National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)',
    'National Institute of Food and Agriculture (NIFA)',
    'National Institute of Justice',
    'National Institute of Mental Health (NIMH)',
    'National Institute of Neurological Disorders and Stroke (NINDS)',
    'National Institute of Occupational Safety and Health (NIOSH)',
    'National Institute of Standards and Technology (NIST)',
    'National Institutes of Health (NIH)',
    'National Intelligence University',
    'National Interagency Fire Center',
    'National Labor Relations Board (NLRB)',
    'National Laboratories',
    'National Library of Agriculture',
    'National Library of Medicine',
    'National Marine Fisheries Service',
    'National Mediation Board',
    'National Nuclear Security Administration',
    'National Ocean Service',
    'National Oceanic and Atmospheric Administration (NOAA)',
    'National Park Foundation',
    'National Park Service (NPS)',
    'National Passport Information Center (NPIC)',
    'National Pesticide Information Center',
    'National Prevention Information Network',
    'National Railroad Passenger Corporation (AMTRAK)',
    'National Reconnaissance Office',
    'National Science Foundation (NSF)',
    'National Security Agency (NSA)',
    'National Security Council (NSC)',
    'National Technical Information Service',
    'National Telecommunications and Information Administration',
    'National Transportation Safety Board (NTSB)',
    'National War College',
    'National Weather Service',
    'Natural Resources Conservation Service',
    'Natural Resources Revenue, Office of',
    'Navy',
    'NOAA Fisheries',
    'Northern Border Regional Commission',
    'Northern Command',
    'Northwest Power and Conservation Council',
    'Northwest Power Planning Council',
    'Nuclear Energy, Office of',
    'Nuclear Regulatory Commission (NRC)',
    'Nuclear Waste Technical Review Board',
    'Oak Ridge National Laboratory',
    'Occupational Safety and Health Administration (OSHA)',
    'Occupational Safety and Health Review Commission',
    'Ocean Energy Management, Bureau of',
    'Office for Civil Rights, Department of Education',
    'Office for Civil Rights, Department of Health and Human Services',
    'Office of Career, Technical, and Adult Education',
    'Office of Child Support Enforcement (OCSE)',
    'Office of Community Planning and Development',
    'Office of Congressional Workplace Rights',
    'Office of Cuba Broadcasting',
    'Office of Disability Employment Policy (ODEP)',
    'Office of Elementary and Secondary Education',
    'Office of Environmental Management',
    'Office of Fair Housing and Equal Opportunity (FHEO)',
    'Office of Fossil Energy',
    'Office of Government Ethics (OGE)',
    'Office of Housing',
    'Office of Immigrant and Employee Rights (IER)',
    'Office of Investor Education and Advocacy',
    'Office of Justice Programs',
    'Office of Juvenile Justice and Delinquency Prevention',
    'Office of Lead Hazard Control and Healthy Homes',
    'Office of Local Defense Community Cooperation',
    'Office of Management and Budget (OMB)',
    'Office of Manufactured Housing Programs',
    'Office of Minority Health',
    'Office of National Drug Control Policy (ONDCP)',
    'Office of Natural Resources Revenue',
    'Office of Nuclear Energy',
    'Office of Personnel Management (OPM)',
    'Office of Policy Development and Research',
    'Office of Postsecondary Education',
    'Office of Refugee Resettlement',
    'Office of Science and Technology Policy',
    'Office of Scientific and Technical Information',
    'Office of Servicemember Affairs',
    'Office of Special Counsel',
    'Office of Special Education and Rehabilitative Services (OSERS)',
    'Office of Surface Mining, Reclamation and Enforcement',
    'Office of the Assistant Secretary for Research and Technology',
    'Office of the Comptroller of the Currency (OCC)',
    'Office of the Director of National Intelligence',
    'Office of the Federal Register',
    'Office of the Pardon Attorney',
    'Office on Violence Against Women (OVW)',
    'Open World Leadership Center',
    'Pacific Command',
    'Pacific Northwest Electric Power and Conservation Planning Council',
    'Pardon Attorney, Office of',
    'Parent Information and Resources Center (CPIR)',
    'Parole Commission',
    'Passport Information Center (NPIC)',
    'Patent and Trademark Office',
    'Peace Corps',
    'Pension Benefit Guaranty Corporation (PBGC)',
    'Pentagon Force Protection Agency',
    'Pipeline and Hazardous Materials Safety Administration',
    'Policy Development and Research',
    'Political Affairs',
    'Postal Inspection Service',
    'Postal Regulatory Commission',
    'Postal Service (USPS)',
    'Postsecondary Education, Office of',
    'Power Administrations',
    "President's Council on Fitness, Sports and Nutrition",
    'Presidential Scholars Commission',
    'Presidio Trust',
    'Pretrial Services Agency for the District of Columbia',
    'Prevention Information Network',
    'Privacy and Civil Liberties Oversight Board (PCLOB)',
    'Public and Indian Housing',
    'Public Diplomacy and Public Affairs',
    'Radio and TV Martí',
    'Radio Free Asia (RFA)',
    'Radio Free Europe and Radio Liberty (RFE/RL)',
    'Radio Sawa',
    'Railroad Retirement Board (RRB)',
    'Reclamation, Bureau of',
    'Refugee Resettlement, Office of',
    'Rehabilitation Services Administration',
    'Risk Management Agency',
    'Rural Business and Cooperative Programs',
    'Rural Development',
    'Rural Housing Service',
    'Rural Utilities Service',
    'Safety and Environmental Enforcement, Bureau of (BSEE)',
    'Saint Lawrence Seaway Development Corporation',
    'Science and Technology Policy, Office of',
    'Science Office',
    'Scientific and Technical Information, Office of',
    'Seafood Inspection Program',
    'Secret Service',
    'Securities and Exchange Commission (SEC)',
    'Selective Service System (SSS)',
    'Senate',
    'Sentencing Commission',
    'Servicemember Affairs, Office of',
    'Small Business Administration (SBA)',
    'Smithsonian Institution',
    'Social Security Administration (SSA)',
    'Social Security Advisory Board',
    'Southeastern Power Administration',
    'Southern Command',
    'Southwestern Power Administration',
    'Space Command',
    'Special Counsel, Office of',
    'Special Education and Rehabilitative Services, Office of (OSERS)',
    'Special Operations Command',
    'State Department (DOS)',
    'State Justice Institute',
    'Stennis Center for Public Service',
    'Strategic Command',
    'Substance Abuse and Mental Health Services Administration (SAMHSA)',
    'Supreme Court of the United States',
    'Surface Mining, Reclamation and Enforcement, Office of',
    'Surface Transportation Board',
    'Susquehanna River Basin Commission',
    'Tax Court',
    'Taxpayer Advocacy Panel',
    'Tennessee Valley Authority (TVA)',
    'Trade and Development Agency',
    'Trade Representative',
    'Transportation Department (DOT)',
    'Transportation Security Administration (TSA)',
    'Transportation Statistics, Bureau of',
    'Treasury Department',
    'Trustee Program',
    'U.S. AbilityOne Commission',
    'U.S. Access Board',
    'U.S. Africa Command',
    'U.S. Agency for Global Media',
    'U.S. Agency for International Development (USAID)',
    'U.S. Air Force',
    'U.S. Air Force Reserve Command',
    'U.S. Arctic Research Commission',
    'U.S. Army',
    'U.S. Army Corps of Engineers',
    'U.S. Botanic Garden',
    'U.S. Capitol Police',
    'U.S. Capitol Visitor Center',
    'U.S. Census Bureau',
    'U.S. Central Command (CENTCOM)',
    'U.S. Chemical Safety Board',
    'U.S. Citizenship and Immigration Services (USCIS)',
    'U.S. Coast Guard',
    'U.S. Commission of Fine Arts',
    'U.S. Commission on International Religious Freedom',
    'U.S. Commodity Futures Trading Commission (CFTC)',
    'U.S. Court of Appeals for Veterans Claims',
    'U.S. Courts of Appeal',
    'U.S. Customs and Border Protection',
    'U.S. Cyber Command',
    'U.S. Department of Agriculture (USDA)',
    'U.S. Department of Commerce (DOC)',
    'U.S. Department of Defense (DOD)',
    'U.S. Department of Education (ED)',
    'U.S. Department of Energy (DOE)',
    'U.S. Department of Health and Human Services (HHS)',
    'U.S. Department of Homeland Security (DHS)',
    'U.S. Department of Housing and Urban Development (HUD)',
    'U.S. Department of Justice (DOJ)',
    'U.S. Department of Labor (DOL)',
    'U.S. Department of State (DOS)',
    'U.S. Department of the Interior (DOI)',
    'U.S. Department of the Treasury',
    'U.S. Department of Transportation (DOT)',
    'U.S. Department of Veterans Affairs (VA)',
    'U.S. Election Assistance Commission (EAC)',
    'U.S. European Command',
    'U.S. Fire Administration (USFA)',
    'U.S. Fleet Forces Command',
    'U.S. Geological Survey (USGS)',
    'U.S. House of Representatives',
    'U.S. Immigration and Customs Enforcement (ICE)',
    'U.S. Indo-Pacific Command',
    'U.S. International Development Finance Corporation (DFC)',
    'U.S. International Trade Commission',
    'U.S. Marine Corps',
    'U.S. Marshals Service',
    'U.S. Military Academy, West Point',
    'U.S. Mint',
    'U.S. Mission to the United Nations',
    'U.S. National Central Bureau - Interpol',
    'U.S. Navy',
    'U.S. Northern Command',
    'U.S. Nuclear Regulatory Commission (NRC)',
    'U.S. Parole Commission',
    'U.S. Patent and Trademark Office',
    'U.S. Postal Inspection Service',
    'U.S. Postal Service (USPS)',
    'U.S. Senate',
    'U.S. Sentencing Commission',
    'U.S. Southern Command',
    'U.S. Space Command',
    'U.S. Special Operations Command',
    'U.S. Strategic Command',
    'U.S. Trade and Development Agency',
    'U.S. Trade Representative',
    'U.S. Transportation Command',
    'U.S. Trustee Program',
    'Unified Combatant Commands',
    'Uniformed Services University of the Health Sciences',
    'US-CERT (US CERT)',
    'USAGov',
    'Veterans Affairs Department (VA)',
    'Veterans Benefits Administration (VBA)',
    'Veterans Day National Committee',
    'Veterans Health Administration (VHA)',
    "Veterans' Employment and Training Service (VETS)",
    'Violence Against Women, Office on (OVW)',
    'Voice of America (VOA)',
    'Wage and Hour Division (WHD)',
    'Washington Headquarters Services',
    'Weather Service',
    'Weights and Measures Division',
    'West Point Military Academy',
    'Western Area Power Administration',
    'White House',
    'Wireless Telecommunications Bureau',
    "Women's Bureau",
    'Woodrow Wilson International Center for Scholars',
  ],
}

export default Constants
