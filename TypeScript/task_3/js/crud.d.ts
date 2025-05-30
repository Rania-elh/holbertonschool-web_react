// Import types from interface.ts
import { RowID, RowElement } from './interface';

// Declare the type of the functions exported by crud.js
export declare function insertRow(row: RowElement): RowID;
export declare function deleteRow(rowId: RowID): void;
export declare function updateRow(rowId: RowID, row: RowElement): RowID;

