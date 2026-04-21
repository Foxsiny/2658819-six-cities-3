import {createAction} from '@reduxjs/toolkit';
import { SortType } from '../const';
import {Offer} from '../types/offer';

export const changeCity = createAction<{city: string}>('city/changeCity');

export const setOffers = createAction<Offer[]>('city/setOffers');

export const changeSortType = createAction<{type: SortType}>('offers/changeSortType');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
