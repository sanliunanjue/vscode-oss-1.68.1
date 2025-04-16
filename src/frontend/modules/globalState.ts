/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BrowserWindow } from 'electron';



export const getDesktopWindow = (): BrowserWindow | null => state.desktopWindow;



export const setDesktopWindow = (window: BrowserWindow): void => {
  state.desktopWindow = window;
};
