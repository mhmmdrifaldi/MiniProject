import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import ProgramEntityReduce from './ProgramEntityReducer';
import AddressTypeReduce from './AddressTypeReducer';
import CountryReduce from './CountryReducer';
import ProvinceReduce from './ProvinceReducer';
import CityReduce from './CityReducer';
import MasterLocationReduce from './MasterLocationReducer';
import BatchListReduce from './BatchListReducer';
import BatchReduce from './Test';

const rootReducer = combineReducers({
  userState : userReducer,
  programEntityState:ProgramEntityReduce,
  addressTypeState:AddressTypeReduce,
  countryState:CountryReduce,
  provinceState:ProvinceReduce,
  cityState:CityReduce,
  masterLocationState:MasterLocationReduce,
  batchListState : BatchListReduce, 
  batchState : BatchReduce
  
});

export default rootReducer;
