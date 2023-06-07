import { BusinessOrganizationInterface } from 'interfaces/business-organization';

export interface EnvironmentalDataInterface {
  id?: string;
  business_organization_id: string;
  data_type: string;
  value: number;
  date: Date;
  created_at?: Date;
  updated_at?: Date;

  business_organization?: BusinessOrganizationInterface;
  _count?: {};
}
