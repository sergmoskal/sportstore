import { CarAction, CarType } from './car.actions';
import * as moment from 'moment';
import { Car } from '../models/car';

export const InitState = {
  cars:[]
};

export function carReducer(state=InitState,action:CarType){
    switch(action.type){
      case CarAction.ADD_CAR:{
        return {...state,cars:[...state.cars,action.payload[0]]};
      }
      case CarAction.DELETE_CAR:{
          return {...state,cars:[...state.cars.filter((c)=>c.id != action.payload[0].id)]}
      }

      case CarAction.UPDATE_CAR:{
        let idx:number = state.cars.findIndex((value:Car)=>value.id === action.payload[0].id);
        state.cars[idx] = action.payload[0];
        return {...state,cars:[...state.cars]};
      }

      case CarAction.LOAD_CAR:{
          action.payload.forEach((value,index)=>{
             action.payload[index].date = moment(moment(action.payload[index].date).format()).toDate();
          });
          return {...state,cars:[...action.payload]}
      }
      default:
        return state;
    }
}
