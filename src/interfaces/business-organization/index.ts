import { EnvironmentalDataInterface } from 'interfaces/environmental-data';
import { EnvironmentalGoalInterface } from 'interfaces/environmental-goal';
import { SuggestionInterface } from 'interfaces/suggestion';
import { UserInterface } from 'interfaces/user';

export interface BusinessOrganizationInterface {
  id?: string;
  name: string;
  user_id: string;
  created_at?: Date;
  updated_at?: Date;
  environmental_data?: EnvironmentalDataInterface[];
  environmental_goal?: EnvironmentalGoalInterface[];
  suggestion?: SuggestionInterface[];
  user?: UserInterface;
  _count?: {
    environmental_data?: number;
    environmental_goal?: number;
    suggestion?: number;
  };
}
