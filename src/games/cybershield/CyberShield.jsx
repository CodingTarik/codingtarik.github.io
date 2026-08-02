import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Icons as inline SVG components ───────────────────────────────────────────

const ShieldIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const AlertIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const LockIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const ServerIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const TargetIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
);

const TrophyIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const ChevronIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const HomeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

// ─── Question Data ────────────────────────────────────────────────────────────

const CATEGORIES = {
  NETWORK: { name: 'Network Security', color: 'cyan', icon: '🌐' },
  SOCIAL: { name: 'Social Engineering', color: 'orange', icon: '🎭' },
  ACCESS: { name: 'Access Control', color: 'green', icon: '🔑' },
  DATA: { name: 'Data Protection', color: 'blue', icon: '🛡️' },
  INCIDENT: { name: 'Incident Response', color: 'red', icon: '🚨' },
  CRYPTO: { name: 'Cryptography', color: 'purple', icon: '🔐' },
  COMPLIANCE: { name: 'Compliance & Governance', color: 'yellow', icon: '📋' },
  RISK: { name: 'Risk Management', color: 'pink', icon: '⚖️' },
};

const DIFFICULTY = { EASY: 1, MEDIUM: 2, HARD: 3 };

const questions = [
  // ── Network Security ────────────────────────────────────────
  {
    id: 1,
    category: 'NETWORK',
    difficulty: DIFFICULTY.EASY,
    scenario: 'Your IDS alerts show unusual outbound traffic from a database server at 3 AM. The traffic is directed to an unknown external IP address on port 443.',
    question: 'What is the most appropriate first response?',
    options: [
      'Immediately shut down the database server',
      'Isolate the server from the network and capture traffic for analysis',
      'Ignore it — port 443 is HTTPS, so it\'s probably safe',
      'Send an email to the IT team about it in the morning',
    ],
    correct: 1,
    explanation: 'Isolating the server prevents further data exfiltration while preserving forensic evidence. Shutting down destroys volatile evidence, ignoring it risks data loss, and waiting is too slow for a potential breach.',
    learnMore: 'Network isolation is a key step in incident response. It contains the threat while allowing forensic analysis of the traffic patterns, memory dumps, and log files.',
  },
  {
    id: 2,
    category: 'NETWORK',
    difficulty: DIFFICULTY.MEDIUM,
    scenario: 'Your company\'s web application firewall (WAF) logs show repeated requests containing patterns like: \' OR 1=1 --, UNION SELECT, and <script>alert(1)</script>.',
    question: 'What types of attacks are being attempted?',
    options: [
      'DDoS and brute force attacks',
      'SQL Injection and Cross-Site Scripting (XSS)',
      'Man-in-the-Middle and session hijacking',
      'DNS poisoning and ARP spoofing',
    ],
    correct: 1,
    explanation: 'The patterns \' OR 1=1 -- and UNION SELECT are classic SQL Injection attempts. <script>alert(1)</script> is a typical XSS probe. These are among the OWASP Top 10 web application vulnerabilities.',
    learnMore: 'SQL Injection manipulates database queries through user input, while XSS injects malicious scripts into web pages viewed by other users. Both can be mitigated with input validation, parameterized queries, and Content Security Policy headers.',
  },
  {
    id: 3,
    category: 'NETWORK',
    difficulty: DIFFICULTY.HARD,
    scenario: 'During a routine audit, you discover that your company\'s internal DNS server is responding to recursive queries from external IP addresses. The server also lacks DNSSEC.',
    question: 'What is the primary risk of this misconfiguration?',
    options: [
      'Employees won\'t be able to access internal websites',
      'The server can be exploited for DNS amplification attacks and cache poisoning',
      'Email delivery will be slower than usual',
      'The DNS server will run out of storage space',
    ],
    correct: 1,
    explanation: 'An open DNS resolver can be abused for DNS amplification DDoS attacks (sending large responses to spoofed IPs) and is vulnerable to cache poisoning without DNSSEC, allowing attackers to redirect traffic to malicious sites.',
    learnMore: 'DNSSEC adds cryptographic signatures to DNS records to prevent tampering. Restricting recursive queries to internal networks prevents your server from being used as a DDoS amplifier.',
  },
  {
    id: 4,
    category: 'NETWORK',
    difficulty: DIFFICULTY.EASY,
    scenario: 'A new employee asks why they can\'t access certain internal resources from their home WiFi without connecting to something first.',
    question: 'What technology should they use to securely access internal resources remotely?',
    options: [
      'A proxy server from a free provider',
      'Remote Desktop Protocol (RDP) directly exposed to the internet',
      'A Virtual Private Network (VPN)',
      'Port forwarding on the company router',
    ],
    correct: 2,
    explanation: 'A VPN creates an encrypted tunnel between the remote device and the corporate network, allowing secure access to internal resources. Direct RDP exposure is a major attack vector, and free proxies are untrustworthy.',
    learnMore: 'VPNs encrypt all traffic between the endpoint and the corporate network. Modern alternatives include Zero Trust Network Access (ZTNA), which provides more granular access control than traditional VPNs.',
  },

  // ── Social Engineering ──────────────────────────────────────
  {
    id: 5,
    category: 'SOCIAL',
    difficulty: DIFFICULTY.EASY,
    scenario: 'An employee receives an urgent email from "IT Support" asking them to click a link and verify their credentials because "their account will be deactivated in 2 hours."',
    question: 'What are the key indicators this is a phishing attempt?',
    options: [
      'The email was sent during business hours',
      'Urgency, threat of consequences, and request for credentials via link',
      'The email mentions IT Support',
      'The email was received on a weekday',
    ],
    correct: 1,
    explanation: 'Phishing emails commonly use urgency ("2 hours"), threats ("account deactivated"), and credential harvesting links. Legitimate IT departments typically don\'t request credentials via email links.',
    learnMore: 'The three pillars of social engineering are: Authority (pretending to be IT), Urgency (time pressure), and Fear (account deactivation). Always verify such requests through a separate communication channel.',
  },
  {
    id: 6,
    category: 'SOCIAL',
    difficulty: DIFFICULTY.MEDIUM,
    scenario: 'Your CFO receives a phone call from someone claiming to be the CEO, who is "traveling abroad." The caller urgently requests an immediate wire transfer of €50,000 to a new vendor, saying "we\'ll lose the deal if we don\'t pay today."',
    question: 'What type of attack is this, and what should the CFO do?',
    options: [
      'This is normal business — process the transfer immediately',
      'This is vishing (voice phishing) / CEO fraud — verify via a separate channel before any action',
      'This is a spam call — just hang up and ignore it',
      'Forward the request to the entire finance team for group decision',
    ],
    correct: 1,
    explanation: 'This is a classic CEO fraud / Business Email Compromise (BEC) variant using voice (vishing). The CFO should verify the request by calling the CEO\'s known number directly, never the number from the incoming call.',
    learnMore: 'CEO fraud costs businesses billions annually. Key defenses include: dual-authorization for large transfers, out-of-band verification (calling back on a known number), and employee awareness training.',
  },
  {
    id: 7,
    category: 'SOCIAL',
    difficulty: DIFFICULTY.HARD,
    scenario: 'A security researcher discovers that attackers created a fake LinkedIn profile of a recruiter at your company. They\'ve been connecting with employees and sending "job opportunity" PDFs that contain malware. Several employees have already opened the files.',
    question: 'What is this attack technique called, and what\'s the appropriate response?',
    options: [
      'Brute force attack — reset all passwords',
      'Spear phishing via social media — initiate incident response, scan affected systems, and notify all staff',
      'Denial of service — block LinkedIn on the firewall',
      'SQL injection — patch the web application',
    ],
    correct: 1,
    explanation: 'This is a targeted spear phishing campaign using social media as the delivery vector. The response must include: scanning affected systems for malware, incident response procedures, employee notification, and contacting LinkedIn to remove the fake profile.',
    learnMore: 'Social media-based attacks are increasingly sophisticated. Defenses include: social media monitoring for brand impersonation, employee training on verifying recruiter identities, and endpoint detection and response (EDR) solutions.',
  },

  // ── Access Control ──────────────────────────────────────────
  {
    id: 8,
    category: 'ACCESS',
    difficulty: DIFFICULTY.EASY,
    scenario: 'A developer requests admin access to the production database "because it would be faster to debug issues directly."',
    question: 'How should this request be handled according to security best practices?',
    options: [
      'Grant the access — developers need to be productive',
      'Deny the request and apply the Principle of Least Privilege — provide read-only access to a staging replica instead',
      'Grant temporary access with no time limit',
      'Give admin access but ask them to "be careful"',
    ],
    correct: 1,
    explanation: 'The Principle of Least Privilege states that users should only have the minimum permissions necessary. Developers should debug on staging/replica environments, not production databases with admin rights.',
    learnMore: 'Least Privilege is a core security principle. Complementary controls include: role-based access control (RBAC), just-in-time (JIT) access provisioning, and comprehensive audit logging.',
  },
  {
    id: 9,
    category: 'ACCESS',
    difficulty: DIFFICULTY.MEDIUM,
    scenario: 'Your company is implementing Multi-Factor Authentication (MFA). The security team must choose between SMS-based OTP, authenticator apps (TOTP), and hardware security keys (FIDO2).',
    question: 'Which option provides the strongest security, and why?',
    options: [
      'SMS OTP — it\'s the most widely used and convenient',
      'Authenticator apps — they work offline and are free',
      'Hardware security keys (FIDO2) — they\'re phishing-resistant and not vulnerable to SIM swapping',
      'No MFA is needed if passwords are strong enough',
    ],
    correct: 2,
    explanation: 'FIDO2 hardware keys provide the strongest MFA because they use public-key cryptography bound to the specific website, making them immune to phishing. SMS can be intercepted via SIM swapping, and TOTP codes can be phished in real-time.',
    learnMore: 'FIDO2/WebAuthn keys verify both the user and the website domain, preventing real-time phishing proxies. Google reported zero successful phishing attacks on employees after deploying hardware keys company-wide.',
  },
  {
    id: 10,
    category: 'ACCESS',
    difficulty: DIFFICULTY.HARD,
    scenario: 'After implementing Zero Trust Architecture, your security team needs to define access policies. A remote employee with a company-managed device needs to access a sensitive financial application.',
    question: 'In a Zero Trust model, which factors should be evaluated before granting access?',
    options: [
      'Only the username and password',
      'Only whether they\'re on the VPN',
      'User identity, device health, location, behavior patterns, and the sensitivity of the requested resource',
      'Only the IP address of the request',
    ],
    correct: 2,
    explanation: 'Zero Trust follows "never trust, always verify." Access decisions should be based on multiple signals: user identity (MFA), device posture (patched, compliant), network context, behavioral analytics, and data sensitivity classification.',
    learnMore: 'Zero Trust Architecture (NIST SP 800-207) eliminates implicit trust. Every access request is evaluated against multiple attributes in real-time, including continuous monitoring during the session.',
  },

  // ── Data Protection ─────────────────────────────────────────
  {
    id: 11,
    category: 'DATA',
    difficulty: DIFFICULTY.EASY,
    scenario: 'An employee accidentally sends a spreadsheet containing customer personal data (names, emails, phone numbers) to the wrong external email address.',
    question: 'Under GDPR, what classification does this event have?',
    options: [
      'A minor inconvenience — no action needed',
      'A personal data breach that must be assessed and potentially reported to the supervisory authority within 72 hours',
      'Only a breach if financial data was included',
      'Not a breach because it was accidental',
    ],
    correct: 1,
    explanation: 'Under GDPR Article 33, any unauthorized disclosure of personal data is a breach, regardless of intent. If it\'s likely to pose a risk to individuals\' rights and freedoms, it must be reported to the supervisory authority within 72 hours.',
    learnMore: 'GDPR defines a personal data breach broadly: any breach of security leading to accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to personal data. DLP (Data Loss Prevention) tools can prevent such incidents.',
  },
  {
    id: 12,
    category: 'DATA',
    difficulty: DIFFICULTY.MEDIUM,
    scenario: 'Your company stores customer credit card numbers in its database. A PCI DSS audit is coming up, and you need to ensure the data is properly secured.',
    question: 'What is the recommended approach for storing credit card data?',
    options: [
      'Encrypt the full card numbers with a basic password',
      'Use tokenization to replace card numbers with non-sensitive tokens, and store actual card data in a PCI-compliant vault',
      'Store them in plain text but restrict database access',
      'Hash the card numbers with MD5',
    ],
    correct: 1,
    explanation: 'Tokenization replaces sensitive card data with non-sensitive tokens, reducing PCI DSS scope. The actual card data is stored in a highly secured, PCI-compliant vault. MD5 is broken, and plain text storage violates PCI DSS.',
    learnMore: 'PCI DSS requires: encryption of cardholder data at rest and in transit, access controls, regular testing, and maintaining a security policy. Tokenization significantly reduces the compliance burden by minimizing where actual card data exists.',
  },
  {
    id: 13,
    category: 'DATA',
    difficulty: DIFFICULTY.HARD,
    scenario: 'Your company is migrating to the cloud and needs to classify its data assets. The dataset includes: public marketing materials, internal HR documents, customer PII, trade secrets, and source code.',
    question: 'Which data classification scheme correctly orders these from least to most sensitive?',
    options: [
      'Public → Internal → Confidential → Restricted (marketing → HR docs → source code → customer PII & trade secrets)',
      'All data should be treated the same — classification is unnecessary',
      'Restricted → Confidential → Internal → Public (opposite order)',
      'Only customer PII needs classification; everything else is "general"',
    ],
    correct: 0,
    explanation: 'A proper classification scheme uses tiers: Public (marketing), Internal (HR docs), Confidential (source code), and Restricted (customer PII, trade secrets). Each tier requires progressively stronger controls for access, storage, and transmission.',
    learnMore: 'Data classification is fundamental to information security. It determines encryption requirements, access controls, retention policies, and breach notification obligations. ISO 27001 Annex A.8 specifically addresses asset management and classification.',
  },

  // ── Incident Response ───────────────────────────────────────
  {
    id: 14,
    category: 'INCIDENT',
    difficulty: DIFFICULTY.EASY,
    scenario: 'Multiple employees report that they can\'t access their files, and their screens display a message: "Your files have been encrypted. Pay 5 BTC to unlock them."',
    question: 'What is the correct order of immediate actions?',
    options: [
      'Pay the ransom quickly to minimize downtime',
      'Disconnect affected systems from the network → Notify the incident response team → Preserve evidence → Begin recovery from backups',
      'Turn off all computers in the building immediately',
      'Post about it on social media to warn others',
    ],
    correct: 1,
    explanation: 'The correct response follows the incident response lifecycle: Contain (disconnect from network), Notify (IR team), Preserve (forensic evidence), and Recover (from verified backups). Never pay the ransom — it funds criminals and doesn\'t guarantee recovery.',
    learnMore: 'Ransomware response requires: network isolation to prevent lateral movement, verification of backup integrity, forensic analysis to determine the attack vector, and coordination with law enforcement. The NIST Cybersecurity Framework provides detailed IR guidance.',
  },
  {
    id: 15,
    category: 'INCIDENT',
    difficulty: DIFFICULTY.MEDIUM,
    scenario: 'Your SIEM alerts show that a single user account has authenticated from 5 different countries within the last hour. The account belongs to a regular office employee who is currently at their desk.',
    question: 'What does this pattern most likely indicate?',
    options: [
      'The employee is using multiple VPN services for testing',
      'Compromised credentials being used by multiple attackers or a credential stuffing botnet',
      'A SIEM malfunction generating false positives',
      'Normal behavior for cloud-based authentication',
    ],
    correct: 1,
    explanation: 'Impossible travel — authentication from geographically impossible locations in a short time — is a strong indicator of compromised credentials. The account should be immediately locked, the employee\'s password reset, and sessions terminated.',
    learnMore: 'Impossible travel detection is a key UEBA (User and Entity Behavior Analytics) capability. Modern SIEM/SOAR platforms can automatically respond by: locking the account, requiring step-up authentication, and creating an incident ticket.',
  },
  {
    id: 16,
    category: 'INCIDENT',
    difficulty: DIFFICULTY.HARD,
    scenario: 'During incident response, your forensic team discovers that the attacker gained initial access 6 months ago via a supply chain compromise. They\'ve maintained persistence through a modified system binary and have been exfiltrating data weekly.',
    question: 'What type of threat is this, and what does the extended timeline indicate?',
    options: [
      'Script kiddie attack — they were just playing around',
      'Advanced Persistent Threat (APT) — the extended dwell time, supply chain vector, and persistent access indicate a sophisticated, well-resourced adversary',
      'Automated malware — it spread on its own',
      'Insider threat — an employee must be responsible',
    ],
    correct: 1,
    explanation: 'The characteristics of an APT include: sophisticated initial access (supply chain), long dwell time (6 months), persistence mechanisms (modified binaries), and systematic data exfiltration. This requires a comprehensive response including full environment review.',
    learnMore: 'APTs are typically state-sponsored or well-funded criminal groups. The average dwell time globally is still over 200 days. Defense requires: supply chain security assessments, integrity monitoring, threat hunting, and assume-breach mentality.',
  },

  // ── Cryptography ────────────────────────────────────────────
  {
    id: 17,
    category: 'CRYPTO',
    difficulty: DIFFICULTY.EASY,
    scenario: 'Your team is designing a new web application and needs to store user passwords in the database.',
    question: 'What is the most secure way to store passwords?',
    options: [
      'Store them in plain text with access controls on the database',
      'Encrypt them with AES-256 using a master key',
      'Hash them with bcrypt/Argon2 using a unique salt per password',
      'Encode them with Base64',
    ],
    correct: 2,
    explanation: 'Passwords should be hashed (one-way function), not encrypted (reversible). Bcrypt and Argon2 are designed for password hashing — they\'re intentionally slow to resist brute force. Each password needs a unique salt to prevent rainbow table attacks.',
    learnMore: 'Argon2 won the Password Hashing Competition in 2015 and is the current recommendation. It\'s resistant to both GPU attacks (memory-hard) and side-channel attacks. Never use MD5, SHA-1, or even plain SHA-256 for passwords.',
  },
  {
    id: 18,
    category: 'CRYPTO',
    difficulty: DIFFICULTY.MEDIUM,
    scenario: 'Your company needs to ensure that documents sent between offices haven\'t been tampered with during transit and that the sender can\'t deny sending them.',
    question: 'Which cryptographic mechanism provides both integrity and non-repudiation?',
    options: [
      'Symmetric encryption with AES',
      'Digital signatures using the sender\'s private key',
      'A simple checksum like CRC32',
      'Steganography — hiding the message in an image',
    ],
    correct: 1,
    explanation: 'Digital signatures provide: Integrity (any modification invalidates the signature), Authentication (only the private key holder can sign), and Non-repudiation (the sender can\'t deny signing). Symmetric encryption alone doesn\'t provide non-repudiation.',
    learnMore: 'Digital signatures use asymmetric cryptography: the sender signs with their private key, and anyone can verify with the public key. Standards include RSA, ECDSA, and EdDSA. They\'re the foundation of PKI, code signing, and document signing.',
  },
  {
    id: 19,
    category: 'CRYPTO',
    difficulty: DIFFICULTY.HARD,
    scenario: 'Your security team discovers that the company\'s TLS certificates use RSA-2048. With quantum computing advancing, they\'re concerned about "harvest now, decrypt later" attacks.',
    question: 'What is the recommended strategy to prepare for post-quantum threats?',
    options: [
      'Switch to longer RSA keys (RSA-8192) — bigger keys are always better',
      'Begin migrating to post-quantum cryptographic algorithms (e.g., ML-KEM/Kyber, ML-DSA/Dilithium) as recommended by NIST',
      'Quantum computers are decades away — no action needed',
      'Stop using encryption entirely since it will all be broken',
    ],
    correct: 1,
    explanation: 'NIST has standardized post-quantum algorithms (FIPS 203, 204, 205). "Harvest now, decrypt later" means adversaries capture encrypted data today to decrypt with future quantum computers. Migration should start now, especially for data with long-term confidentiality requirements.',
    learnMore: 'Post-quantum cryptography uses mathematical problems that are hard for both classical and quantum computers (lattice-based, hash-based). A hybrid approach — combining classical and PQC algorithms — is recommended during the transition period.',
  },

  // ── Compliance & Governance ─────────────────────────────────
  {
    id: 20,
    category: 'COMPLIANCE',
    difficulty: DIFFICULTY.EASY,
    scenario: 'Your company is pursuing ISO 27001 certification. The auditor asks to see your Information Security Management System (ISMS) documentation.',
    question: 'What is the core purpose of an ISMS?',
    options: [
      'To install antivirus software on all computers',
      'To provide a systematic approach to managing sensitive information through policies, processes, and controls that ensure confidentiality, integrity, and availability',
      'To create a backup of all company data',
      'To monitor employee internet usage',
    ],
    correct: 1,
    explanation: 'An ISMS is a holistic framework for managing information security risks. It encompasses people, processes, and technology — not just technical controls. ISO 27001 requires risk assessment, treatment plans, policies, and continuous improvement.',
    learnMore: 'ISO 27001 follows the Plan-Do-Check-Act (PDCA) cycle. Key components include: risk assessment methodology, Statement of Applicability (SoA), security policies, asset inventory, and management review processes.',
  },
  {
    id: 21,
    category: 'COMPLIANCE',
    difficulty: DIFFICULTY.MEDIUM,
    scenario: 'A customer requests that your company delete all their personal data under their "right to be forgotten" (GDPR Article 17). However, some of their data is part of financial records that must be retained for 7 years by law.',
    question: 'How should this conflict be resolved?',
    options: [
      'Delete everything — the customer\'s request always takes priority',
      'Refuse the deletion entirely — regulatory retention overrides GDPR',
      'Delete all data where no legal retention obligation exists, retain legally required data with documented justification, and inform the customer',
      'Ask the customer to withdraw their request',
    ],
    correct: 2,
    explanation: 'GDPR Article 17(3)(b) provides an exception when processing is necessary for compliance with legal obligations. The correct approach is to honor the deletion where possible, retain what\'s legally required with documentation, and transparently communicate this to the data subject.',
    learnMore: 'Balancing competing legal requirements is common in data protection. Organizations need clear data retention policies, automated deletion workflows, and legal basis documentation for all processing activities.',
  },
  {
    id: 22,
    category: 'COMPLIANCE',
    difficulty: DIFFICULTY.HARD,
    scenario: 'Your company operates in both the EU and the US. You need to transfer employee HR data from your EU office to the US headquarters for payroll processing.',
    question: 'Following the invalidation of Privacy Shield, what is the primary legal mechanism for this transfer?',
    options: [
      'Just send it — internal transfers don\'t need a legal basis',
      'Standard Contractual Clauses (SCCs) with a Transfer Impact Assessment (TIA) documenting supplementary measures',
      'Get verbal consent from each employee',
      'Anonymize all data before transfer (even though you need it for payroll)',
    ],
    correct: 1,
    explanation: 'After Schrems II invalidated Privacy Shield, Standard Contractual Clauses (SCCs) with Transfer Impact Assessments are the primary mechanism. Organizations must assess the legal framework of the recipient country and implement supplementary measures if needed.',
    learnMore: 'The EU-US Data Privacy Framework (2023) provides a new adequacy decision, but organizations should still maintain SCCs as a backup. Supplementary measures may include encryption, pseudonymization, and contractual provisions.',
  },

  // ── Risk Management ─────────────────────────────────────────
  {
    id: 23,
    category: 'RISK',
    difficulty: DIFFICULTY.EASY,
    scenario: 'During a risk assessment, you identify that your company\'s main office is in a flood zone. The estimated damage from a flood would be €2 million, and there\'s a 5% chance of flooding each year.',
    question: 'What is the Annual Loss Expectancy (ALE) for this risk?',
    options: [
      '€10,000,000',
      '€100,000',
      '€2,000,000',
      '€50,000',
    ],
    correct: 1,
    explanation: 'ALE = Single Loss Expectancy (SLE) × Annual Rate of Occurrence (ARO). ALE = €2,000,000 × 0.05 = €100,000. This helps justify security investments — any mitigation costing less than €100,000/year is cost-effective.',
    learnMore: 'Quantitative risk analysis uses financial metrics to prioritize risks. ALE allows direct comparison of risks and cost-benefit analysis of controls. It\'s complemented by qualitative analysis using likelihood/impact matrices.',
  },
  {
    id: 24,
    category: 'RISK',
    difficulty: DIFFICULTY.MEDIUM,
    scenario: 'Your risk register identifies four options for handling a critical vulnerability in a legacy system: accept, mitigate, transfer, or avoid.',
    question: 'The legacy system is too expensive to replace, patching isn\'t possible, but it processes sensitive data. Which risk treatment makes the most sense?',
    options: [
      'Accept the risk — the system works fine',
      'Avoid the risk — shut down the system completely',
      'Mitigate the risk — implement compensating controls (network segmentation, monitoring, WAF) while planning for replacement',
      'Transfer the risk — just buy cyber insurance',
    ],
    correct: 2,
    explanation: 'When the primary control (patching) isn\'t available, compensating controls reduce the risk to an acceptable level. Network segmentation limits blast radius, monitoring enables detection, and a WAF protects against known exploits. Insurance alone doesn\'t reduce the likelihood of a breach.',
    learnMore: 'Compensating controls are alternative measures when primary controls aren\'t feasible. They should be documented, regularly reviewed, and combined with a roadmap for eventually addressing the root cause (system replacement).',
  },
  {
    id: 25,
    category: 'RISK',
    difficulty: DIFFICULTY.HARD,
    scenario: 'Your organization\'s Business Impact Analysis (BIA) determines that the e-commerce platform has an RTO of 4 hours and an RPO of 1 hour. Currently, backups are performed daily, and the disaster recovery site requires 8 hours to bring online.',
    question: 'What gaps exist between the BIA requirements and current capabilities?',
    options: [
      'Everything is fine — daily backups and 8-hour recovery are standard',
      'Both RTO and RPO are exceeded: daily backups mean up to 24 hours of data loss (RPO gap), and 8-hour recovery exceeds the 4-hour RTO',
      'Only the RTO is a problem; the RPO is fine',
      'Only the RPO is a problem; the RTO is fine',
    ],
    correct: 1,
    explanation: 'RPO of 1 hour means maximum 1 hour of data loss, but daily backups could lose up to 24 hours. RTO of 4 hours means systems must be operational within 4 hours, but the DR site needs 8. Both gaps require immediate remediation.',
    learnMore: 'RTO (Recovery Time Objective) defines how quickly systems must be restored. RPO (Recovery Point Objective) defines acceptable data loss. Solutions include: real-time replication (for RPO), hot/warm DR sites (for RTO), and automated failover.',
  },

  // ── Additional questions for depth ──────────────────────────
  {
    id: 26,
    category: 'NETWORK',
    difficulty: DIFFICULTY.MEDIUM,
    scenario: 'Your security team implements a new firewall rule: "Deny all inbound traffic, then allow specific ports and services as needed."',
    question: 'What firewall philosophy does this follow?',
    options: [
      'Blacklist approach — block known bad traffic',
      'Default-deny (whitelist) approach — only explicitly allowed traffic passes',
      'Stateless filtering — check each packet independently',
      'Deep packet inspection — analyze packet contents',
    ],
    correct: 1,
    explanation: 'Default-deny (whitelist) is the most secure firewall philosophy. It blocks everything by default and only allows specifically approved traffic. This is more secure than blacklisting because unknown threats are automatically blocked.',
    learnMore: 'The default-deny principle extends beyond firewalls to all security controls: application whitelisting, zero trust architecture, and the principle of least privilege all follow this philosophy.',
  },
  {
    id: 27,
    category: 'SOCIAL',
    difficulty: DIFFICULTY.EASY,
    scenario: 'A stranger follows an employee through a secured door into the office building by walking close behind them as they badge in.',
    question: 'What physical security threat is this?',
    options: [
      'Shoulder surfing',
      'Tailgating / piggybacking',
      'Dumpster diving',
      'Watering hole attack',
    ],
    correct: 1,
    explanation: 'Tailgating (or piggybacking) is when an unauthorized person gains physical access by following an authorized person through a secured entrance. It bypasses electronic access controls entirely.',
    learnMore: 'Physical security controls against tailgating include: mantraps/airlocks, security guards, turnstiles, employee training to challenge unknown followers, and video surveillance at entry points.',
  },
  {
    id: 28,
    category: 'ACCESS',
    difficulty: DIFFICULTY.MEDIUM,
    scenario: 'Your company has 500 employees. The HR department can access HR systems, finance can access financial systems, but no one should access both unless specifically authorized.',
    question: 'What access control principle prevents a single person from having conflicting access rights?',
    options: [
      'Need-to-know basis',
      'Separation of Duties (SoD)',
      'Mandatory Access Control (MAC)',
      'Discretionary Access Control (DAC)',
    ],
    correct: 1,
    explanation: 'Separation of Duties ensures no single person has enough access to commit fraud or cause critical errors alone. It requires multiple people to complete sensitive processes, providing checks and balances.',
    learnMore: 'SoD is critical in financial systems (the person who approves payments shouldn\'t be the same person who initiates them). It\'s enforced through RBAC policies, regular access reviews, and automated SoD conflict detection.',
  },
  {
    id: 29,
    category: 'DATA',
    difficulty: DIFFICULTY.EASY,
    scenario: 'Your company needs to comply with the CIA triad when designing its security architecture.',
    question: 'What does the CIA triad stand for in information security?',
    options: [
      'Central Intelligence Agency standards',
      'Confidentiality, Integrity, and Availability',
      'Control, Inspection, and Authentication',
      'Compliance, Investigation, and Audit',
    ],
    correct: 1,
    explanation: 'The CIA triad is the foundation of information security: Confidentiality (preventing unauthorized disclosure), Integrity (ensuring data accuracy and trustworthiness), and Availability (ensuring authorized access when needed).',
    learnMore: 'Each element of the CIA triad has specific controls: Encryption protects Confidentiality, Hashing/checksums ensure Integrity, and Redundancy/backups maintain Availability. Security decisions should always consider all three.',
  },
  {
    id: 30,
    category: 'INCIDENT',
    difficulty: DIFFICULTY.EASY,
    scenario: 'Your company is developing an Incident Response Plan. The team needs to understand the standard phases of incident response.',
    question: 'What are the correct phases of the NIST Incident Response lifecycle?',
    options: [
      'Detect → Fix → Forget',
      'Preparation → Detection & Analysis → Containment, Eradication & Recovery → Post-Incident Activity',
      'Alert → Investigate → Blame → Close',
      'Scan → Patch → Report → Done',
    ],
    correct: 1,
    explanation: 'The NIST SP 800-61 Incident Response lifecycle has four phases: 1) Preparation (plans, tools, training), 2) Detection & Analysis (identifying and analyzing incidents), 3) Containment, Eradication & Recovery (stopping and removing the threat, restoring systems), 4) Post-Incident Activity (lessons learned).',
    learnMore: 'The post-incident phase is often neglected but critical. It includes: documenting the timeline, identifying root causes, updating playbooks, and sharing indicators of compromise (IoCs) with the security community.',
  },
];

// ─── Utility Functions ────────────────────────────────────────────────────────

function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getSecurityRating(percentage) {
  if (percentage >= 95) return { grade: 'S', label: 'Elite SOC Analyst', color: 'text-yellow-300' };
  if (percentage >= 85) return { grade: 'A', label: 'Senior Analyst', color: 'text-green-400' };
  if (percentage >= 70) return { grade: 'B', label: 'SOC Analyst', color: 'text-cyan-400' };
  if (percentage >= 55) return { grade: 'C', label: 'Junior Analyst', color: 'text-blue-400' };
  if (percentage >= 40) return { grade: 'D', label: 'Trainee', color: 'text-orange-400' };
  return { grade: 'F', label: 'Needs Training', color: 'text-red-400' };
}

// ─── Animated Background ──────────────────────────────────────────────────────

function CyberBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,200,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,200,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated scan line */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-cyan-400/30"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 0],
            y: [0, -100],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px]" />
    </div>
  );
}

// ─── Typing Effect Component ──────────────────────────────────────────────────

function TypeWriter({ text, speed = 20, onComplete, className = '' }) {
  const [displayed, setDisplayed] = useState('');
  const indexRef = useRef(0);

  useEffect(() => {
    setDisplayed('');
    indexRef.current = 0;
    const interval = setInterval(() => {
      indexRef.current++;
      setDisplayed(text.slice(0, indexRef.current));
      if (indexRef.current >= text.length) {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      {displayed.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="text-cyan-400"
        >
          ▌
        </motion.span>
      )}
    </span>
  );
}

// ─── Threat Level Indicator ───────────────────────────────────────────────────

function ThreatLevel({ level, max = 5 }) {
  const colors = ['bg-green-500', 'bg-green-400', 'bg-yellow-400', 'bg-orange-500', 'bg-red-500'];
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-xs text-slate-400 mr-1 font-mono">THREAT</span>
      {Array.from({ length: max }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: i * 0.1 }}
          className={`w-2 rounded-full ${i < level ? colors[Math.min(i, colors.length - 1)] : 'bg-slate-700'}`}
          style={{ height: `${12 + i * 4}px` }}
        />
      ))}
    </div>
  );
}

// ─── HUD Stats Bar ────────────────────────────────────────────────────────────

function HUDBar({ integrity, score, questionNum, total, streak }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 p-3 sm:p-4 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-xl mb-6">
      {/* Integrity */}
      <div className="flex items-center gap-3 min-w-0">
        <div className="flex items-center gap-1.5">
          <ShieldIcon className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">INTEGRITY</span>
        </div>
        <div className="w-20 sm:w-28 h-2.5 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${integrity > 60 ? 'bg-emerald-500' : integrity > 30 ? 'bg-yellow-500' : 'bg-red-500'}`}
            animate={{ width: `${integrity}%` }}
            transition={{ type: 'spring', stiffness: 100 }}
          />
        </div>
        <span className="text-xs font-mono text-slate-300 w-8">{integrity}%</span>
      </div>

      {/* Score */}
      <div className="flex items-center gap-2">
        <TargetIcon className="w-4 h-4 text-cyan-400 shrink-0" />
        <span className="text-sm font-mono text-cyan-300">{score}</span>
        {streak >= 3 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-xs px-1.5 py-0.5 bg-orange-500/20 text-orange-300 rounded font-mono"
          >
            🔥{streak}
          </motion.span>
        )}
      </div>

      {/* Progress */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-mono text-slate-400">{questionNum}/{total}</span>
        <div className="w-16 sm:w-20 h-2 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full transition-all duration-300"
            style={{ width: `${(questionNum / total) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Main Menu Screen ─────────────────────────────────────────────────────────

function MainMenu({ onStart, highScores }) {
  const [selectedMode, setSelectedMode] = useState(null);

  const modes = [
    {
      id: 'quick',
      name: 'Quick Scan',
      description: '10 random questions across all categories',
      icon: '⚡',
      count: 10,
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      id: 'full',
      name: 'Full Audit',
      description: 'All 30 questions — comprehensive ISMS assessment',
      icon: '🔍',
      count: 30,
      gradient: 'from-emerald-500 to-cyan-600',
    },
    {
      id: 'category',
      name: 'Category Focus',
      description: 'Choose a specific security domain to study',
      icon: '🎯',
      count: null,
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  const categoryOptions = Object.entries(CATEGORIES).map(([key, val]) => ({
    key,
    ...val,
    count: questions.filter(q => q.category === key).length,
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="w-full max-w-2xl">
        {/* Logo / Title */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-center mb-10"
        >
          <motion.div
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
            className="inline-block mb-4"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <ShieldIcon className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 mb-2">
            CyberShield
          </h1>
          <p className="text-slate-400 text-sm sm:text-base font-mono">
            Information Security Management Training
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500/50" />
            <LockIcon className="w-3.5 h-3.5 text-cyan-500/50" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500/50" />
          </div>
        </motion.div>

        {/* Mode Selection */}
        {!selectedMode ? (
          <div className="space-y-3">
            {modes.map((mode, i) => (
              <motion.button
                key={mode.id}
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                onClick={() => {
                  if (mode.id === 'category') {
                    setSelectedMode('category');
                  } else {
                    onStart(mode.id, null, mode.count);
                  }
                }}
                className="w-full group"
              >
                <div className="relative p-4 sm:p-5 bg-slate-900/60 backdrop-blur border border-slate-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300 text-left overflow-hidden">
                  {/* Hover glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${mode.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <div className="relative flex items-center gap-4">
                    <span className="text-2xl">{mode.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white text-base sm:text-lg">{mode.name}</h3>
                      <p className="text-sm text-slate-400">{mode.description}</p>
                    </div>
                    <svg className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        ) : (
          /* Category Selection */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <button
              onClick={() => setSelectedMode(null)}
              className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-4 text-sm"
            >
              <ChevronIcon className="w-4 h-4" />
              <span>Back to modes</span>
            </button>
            <h2 className="text-lg font-bold text-white mb-4">Choose a Security Domain</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {categoryOptions.map((cat, i) => (
                <motion.button
                  key={cat.key}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => onStart('category', cat.key, cat.count)}
                  className="group p-4 bg-slate-900/60 backdrop-blur border border-slate-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{cat.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white text-sm group-hover:text-cyan-300 transition-colors">{cat.name}</h3>
                      <p className="text-xs text-slate-500">{cat.count} questions</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* High Scores */}
        {highScores.length > 0 && !selectedMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 p-4 bg-slate-900/40 border border-slate-800/50 rounded-xl"
          >
            <div className="flex items-center gap-2 mb-3">
              <TrophyIcon className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-bold text-slate-300">Recent Scores</span>
            </div>
            <div className="space-y-2">
              {highScores.slice(0, 3).map((s, i) => (
                <div key={i} className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">{s.mode} — {s.date}</span>
                  <span className={getSecurityRating(s.percentage).color}>
                    {s.score}/{s.total} ({getSecurityRating(s.percentage).grade})
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <button
            onClick={() => { window.location.href = '/tools'; }}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors text-sm"
          >
            <HomeIcon className="w-4 h-4" />
            <span>Back to Tools</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Question Screen ──────────────────────────────────────────────────────────

function QuestionScreen({ question, onAnswer, questionNum, total, integrity, score, streak, timeLeft }) {
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [typingDone, setTypingDone] = useState(false);
  const cat = CATEGORIES[question.category];

  const handleSelect = (idx) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
  };

  const handleNext = () => {
    onAnswer(selected === question.correct);
    setSelected(null);
    setShowResult(false);
    setTypingDone(false);
  };

  const isCorrect = selected === question.correct;
  const difficultyLabel = ['', 'Basic', 'Intermediate', 'Advanced'][question.difficulty];
  const difficultyColor = ['', 'text-green-400', 'text-yellow-400', 'text-red-400'][question.difficulty];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen p-4 pt-6"
    >
      <div className="max-w-3xl mx-auto">
        {/* HUD */}
        <HUDBar integrity={integrity} score={score} questionNum={questionNum} total={total} streak={streak} />

        {/* Category & Difficulty Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800/80 border border-slate-700/50 rounded-full text-xs font-mono">
            <span>{cat.icon}</span>
            <span className="text-slate-300">{cat.name}</span>
          </span>
          <span className={`px-2.5 py-1 bg-slate-800/80 border border-slate-700/50 rounded-full text-xs font-mono ${difficultyColor}`}>
            {difficultyLabel}
          </span>
          <ThreatLevel level={question.difficulty} max={3} />
        </div>

        {/* Scenario Terminal */}
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-xl overflow-hidden mb-5">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-800/50 border-b border-slate-700/30">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <span className="text-xs font-mono text-slate-500 ml-2">incident_report.log</span>
            <motion.div
              animate={{ opacity: [1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-auto w-2 h-2 rounded-full bg-red-500"
            />
          </div>
          {/* Scenario text */}
          <div className="p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <AlertIcon className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-sm sm:text-base text-slate-200 leading-relaxed font-mono">
                <TypeWriter text={question.scenario} speed={12} onComplete={() => setTypingDone(true)} />
              </div>
            </div>
          </div>
        </div>

        {/* Question */}
        <AnimatePresence>
          {typingDone && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-base sm:text-lg font-bold text-white mb-4 flex items-start gap-2">
                <ServerIcon className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                {question.question}
              </h2>

              {/* Options */}
              <div className="space-y-2.5 mb-5">
                {question.options.map((opt, idx) => {
                  let borderColor = 'border-slate-700/50 hover:border-cyan-500/50';
                  let bgColor = 'bg-slate-900/60';
                  let textColor = 'text-slate-200';
                  let labelColor = 'bg-slate-800 text-slate-400';

                  if (showResult) {
                    if (idx === question.correct) {
                      borderColor = 'border-emerald-500/70';
                      bgColor = 'bg-emerald-500/10';
                      textColor = 'text-emerald-200';
                      labelColor = 'bg-emerald-500/20 text-emerald-300';
                    } else if (idx === selected && idx !== question.correct) {
                      borderColor = 'border-red-500/70';
                      bgColor = 'bg-red-500/10';
                      textColor = 'text-red-200';
                      labelColor = 'bg-red-500/20 text-red-300';
                    } else {
                      borderColor = 'border-slate-800/50';
                      textColor = 'text-slate-500';
                    }
                  }

                  return (
                    <motion.button
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.08 }}
                      onClick={() => handleSelect(idx)}
                      disabled={showResult}
                      className={`w-full text-left p-3.5 sm:p-4 ${bgColor} backdrop-blur border ${borderColor} rounded-xl transition-all duration-200 group ${!showResult ? 'cursor-pointer' : ''}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className={`shrink-0 w-7 h-7 flex items-center justify-center rounded-lg text-xs font-bold font-mono ${labelColor} transition-colors`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className={`text-sm sm:text-base ${textColor} transition-colors leading-relaxed`}>
                          {opt}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Result Explanation */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className={`p-4 sm:p-5 rounded-xl border mb-4 ${isCorrect
                      ? 'bg-emerald-500/5 border-emerald-500/30'
                      : 'bg-red-500/5 border-red-500/30'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{isCorrect ? '✅' : '❌'}</span>
                        <span className={`font-bold text-sm ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                          {isCorrect ? 'Correct! Threat neutralized.' : 'Incorrect. Security breach detected.'}
                        </span>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed mb-3">{question.explanation}</p>
                      <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/30">
                        <p className="text-xs font-mono text-cyan-400 mb-1">📖 LEARN MORE</p>
                        <p className="text-xs text-slate-400 leading-relaxed">{question.learnMore}</p>
                      </div>
                    </div>

                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      onClick={handleNext}
                      className="w-full py-3.5 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-bold rounded-xl transition-all duration-200 text-sm flex items-center justify-center gap-2"
                    >
                      {questionNum < total ? 'Next Incident →' : 'View Assessment Report →'}
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ─── Results Screen ───────────────────────────────────────────────────────────

function ResultsScreen({ score, total, answers, questionsUsed, onRestart, onHome }) {
  const percentage = Math.round((score / total) * 100);
  const rating = getSecurityRating(percentage);

  // Category breakdown
  const categoryStats = {};
  questionsUsed.forEach((q, i) => {
    if (!categoryStats[q.category]) {
      categoryStats[q.category] = { correct: 0, total: 0 };
    }
    categoryStats[q.category].total++;
    if (answers[i]) categoryStats[q.category].correct++;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="w-full max-w-2xl">
        {/* Report Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800/80 border border-slate-700/50 rounded-full text-xs font-mono text-slate-400 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            ASSESSMENT COMPLETE
          </div>

          {/* Grade Circle */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
            className="relative w-36 h-36 mx-auto mb-6"
          >
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(100,116,139,0.2)" strokeWidth="8" />
              <motion.circle
                cx="60" cy="60" r="52" fill="none"
                stroke="url(#scoreGrad)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 52}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - percentage / 100) }}
                transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
              />
              <defs>
                <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-4xl font-black ${rating.color}`}>{rating.grade}</span>
              <span className="text-xs text-slate-400 font-mono">{percentage}%</span>
            </div>
          </motion.div>

          <h2 className={`text-xl font-bold ${rating.color} mb-1`}>{rating.label}</h2>
          <p className="text-slate-400 text-sm font-mono">{score}/{total} incidents handled correctly</p>
        </motion.div>

        {/* Category Breakdown */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-900/60 backdrop-blur border border-slate-700/50 rounded-xl p-5 mb-6"
        >
          <h3 className="text-sm font-bold text-slate-300 mb-4 flex items-center gap-2">
            <ServerIcon className="w-4 h-4 text-cyan-400" />
            Domain Analysis
          </h3>
          <div className="space-y-3">
            {Object.entries(categoryStats).map(([key, stats]) => {
              const cat = CATEGORIES[key];
              const pct = Math.round((stats.correct / stats.total) * 100);
              return (
                <div key={key}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-slate-400 flex items-center gap-1.5">
                      <span>{cat.icon}</span> {cat.name}
                    </span>
                    <span className="text-xs font-mono text-slate-300">{stats.correct}/{stats.total}</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className={`h-full rounded-full ${pct >= 70 ? 'bg-emerald-500' : pct >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-slate-900/60 backdrop-blur border border-slate-700/50 rounded-xl p-5 mb-6"
        >
          <h3 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
            <AlertIcon className="w-4 h-4 text-amber-400" />
            Training Recommendations
          </h3>
          <div className="space-y-2">
            {Object.entries(categoryStats)
              .filter(([, stats]) => stats.correct / stats.total < 0.7)
              .map(([key]) => (
                <div key={key} className="flex items-center gap-2 text-sm text-slate-400">
                  <span className="text-amber-400">→</span>
                  <span>Focus on <strong className="text-white">{CATEGORIES[key].name}</strong> — review fundamentals and practice scenarios</span>
                </div>
              ))}
            {Object.entries(categoryStats).every(([, stats]) => stats.correct / stats.total >= 0.7) && (
              <p className="text-sm text-emerald-400">Excellent performance across all domains! Consider advancing to harder difficulty levels.</p>
            )}
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <button
            onClick={onRestart}
            className="flex-1 py-3.5 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-bold rounded-xl transition-all duration-200 text-sm"
          >
            New Assessment
          </button>
          <button
            onClick={onHome}
            className="flex-1 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl transition-all duration-200 text-sm border border-slate-700"
          >
            Back to Menu
          </button>
        </motion.div>

        {/* Back to tools */}
        <div className="mt-6 text-center">
          <button
            onClick={() => { window.location.href = '/tools'; }}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors text-sm"
          >
            <HomeIcon className="w-4 h-4" />
            <span>Back to Tools</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Game Component ──────────────────────────────────────────────────────

export default function CyberShield() {
  const [screen, setScreen] = useState('menu'); // menu | game | results
  const [gameQuestions, setGameQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [integrity, setIntegrity] = useState(100);
  const [streak, setStreak] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [highScores, setHighScores] = useState([]);
  const [gameMode, setGameMode] = useState('');

  // Load high scores
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('cybershield_scores') || '[]');
      setHighScores(saved);
    } catch {
      setHighScores([]);
    }
  }, []);

  const startGame = useCallback((mode, category, count) => {
    let pool;
    let modeName;

    if (mode === 'quick') {
      pool = shuffleArray(questions).slice(0, 10);
      modeName = 'Quick Scan';
    } else if (mode === 'full') {
      pool = shuffleArray(questions);
      modeName = 'Full Audit';
    } else if (mode === 'category' && category) {
      pool = shuffleArray(questions.filter(q => q.category === category));
      modeName = CATEGORIES[category].name;
    } else {
      pool = shuffleArray(questions).slice(0, 10);
      modeName = 'Quick Scan';
    }

    setGameQuestions(pool);
    setCurrentIdx(0);
    setScore(0);
    setIntegrity(100);
    setStreak(0);
    setAnswers([]);
    setGameMode(modeName);
    setScreen('game');
  }, []);

  const handleAnswer = useCallback((correct) => {
    const newAnswers = [...answers, correct];
    setAnswers(newAnswers);

    if (correct) {
      const streakBonus = streak >= 4 ? 30 : streak >= 2 ? 20 : 10;
      const difficultyBonus = gameQuestions[currentIdx].difficulty * 5;
      setScore(prev => prev + streakBonus + difficultyBonus);
      setStreak(prev => prev + 1);
    } else {
      setIntegrity(prev => Math.max(0, prev - 15));
      setStreak(0);
    }

    if (currentIdx + 1 >= gameQuestions.length || integrity <= 0) {
      // Game over
      const finalScore = correct ? score + 10 : score;
      const total = gameQuestions.length;
      const correctCount = newAnswers.filter(Boolean).length;
      const pct = Math.round((correctCount / total) * 100);

      const newEntry = {
        mode: gameMode,
        score: correctCount,
        total,
        percentage: pct,
        date: new Date().toLocaleDateString(),
      };

      const updated = [newEntry, ...highScores].slice(0, 10);
      setHighScores(updated);
      try {
        localStorage.setItem('cybershield_scores', JSON.stringify(updated));
      } catch { /* ignore */ }

      setTimeout(() => setScreen('results'), 300);
    } else {
      setCurrentIdx(prev => prev + 1);
    }
  }, [answers, currentIdx, gameQuestions, integrity, score, streak, highScores, gameMode]);

  return (
    <div className="relative min-h-screen text-white" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <CyberBackground />
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {screen === 'menu' && (
            <MainMenu
              key="menu"
              onStart={startGame}
              highScores={highScores}
            />
          )}
          {screen === 'game' && gameQuestions[currentIdx] && (
            <QuestionScreen
              key={`q-${currentIdx}`}
              question={gameQuestions[currentIdx]}
              onAnswer={handleAnswer}
              questionNum={currentIdx + 1}
              total={gameQuestions.length}
              integrity={integrity}
              score={score}
              streak={streak}
            />
          )}
          {screen === 'results' && (
            <ResultsScreen
              key="results"
              score={answers.filter(Boolean).length}
              total={gameQuestions.length}
              answers={answers}
              questionsUsed={gameQuestions}
              onRestart={() => startGame('quick', null, 10)}
              onHome={() => setScreen('menu')}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
