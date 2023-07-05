/// <reference path="crud.d.ts" />

import {RowID, RowElement} from './interface.js';

import { insertRow, deleteRow, updateRow } from './crud.js'; 

const row : RowElement {
    firstName  = 'Guillaume',
    lastName  = 'Salva'
}

const newRowID: RowID = insertRow()