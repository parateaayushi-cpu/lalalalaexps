/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CastingCall {
  id: string;
  title: string;
  type: string;
  roleType: string;
  tags: string[];
  applicantCount: number;
  imageUrl: string;
}

export interface Applicant {
  id: string;
  name: string;
  role: string;
  location: string;
  project: string;
  imageUrl: string;
  tags: string[];
}

export interface IndustryTrend {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}
