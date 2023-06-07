import { UserInterface } from 'interfaces/user';
import { BusinessOrganizationInterface } from 'interfaces/business-organization';

export interface SuggestionInterface {
  id?: string;
  user_id: string;
  business_organization_id: string;
  suggestion_type: string;
  description: string;
  created_at?: Date;
  updated_at?: Date;

  user?: UserInterface;
  business_organization?: BusinessOrganizationInterface;
  _count?: {};
}
