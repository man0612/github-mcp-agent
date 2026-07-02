export interface SummaryResponse {
    purpose: string;
    risk: "Low" | "Medium" | "High";
    majorChanges: string[];
    filesImpacted: string[];
    breakingChanges: string[];
    summary: string;
  }
  
  export interface ReviewResponse {
    summary: string;
    bugs: string[];
    securityIssues: string[];
    performanceIssues: string[];
    bestPractices: string[];
    suggestions: string[];
  }
  
  export interface SecurityIssue {
    type: string;
    severity: string;
    description: string;
    recommendation: string;
  }
  
  export interface SecurityResponse {
    risk: "Low" | "Medium" | "High" | "Critical";
    issues: SecurityIssue[];
  }