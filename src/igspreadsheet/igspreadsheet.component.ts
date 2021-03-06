import { Component, ElementRef, Renderer, IterableDiffers } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

@Component({
	selector: "ig-spreadsheet",
	template: "<ng-content></ng-content>",
	inputs:["widgetId","options","changeDetectionInterval","disabled","create","width","height","activeCell","isScrollLocked","activeWorksheet","allowAddWorksheet","allowDeleteWorksheet","areGridlinesVisible","areHeadersVisible","enterKeyNavigationDirection","isEnterKeyNavigationEnabled","isFormulaBarVisible","isInEndMode","isUndoEnabled","nameBoxWidth","selectionMode","selectedWorksheets","validationInputMessagePosition","workbook","zoomLevel"],
	outputs:["actionExecuted","actionExecuting","activeCellChanged","activePaneChanged","activeWorksheetChanged","editRangePasswordNeeded","hyperlinkExecuting","selectionChanged","userPromptDisplaying","workbookDirtied"]
})
export class IgSpreadsheetComponent extends IgControlBase<IgSpreadsheet> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }
	/**
	 * Returns an object that represents the pane with the focus.
	 */
	public getActivePane(): Object { return; } ;

	/**
	 * Returns an object that represents the current selection of the active pane.
	 */
	public getActiveSelection(): Object { return; } ;

	/**
	 * Returns an object used to get the formatting of the activeCell and where modifications are applied to the entire active selection.
	 *				Any changes made to this object will affect all the objects in the selection. So for example, the 
	 *				Font.Name may return "Arial" because the active cell has that as its resolved font name even though the other 
	 *				cells are using a different font but if you set the Font.Name of this object to "Arial" then all the objects 
	 *				affected by the selection will have their Font.Name updated to that value.
	 */
	public getActiveSelectionCellRangeFormat(): Object { return; } ;

	/**
	 * Returns a boolean indicating if the user is currently editing the name of the active worksheet.
	 */
	public getIsRenamingWorksheet(): boolean { return; } ;

	/**
	 * Returns an array of the panes for the activeWorksheet.
	 *			 
	 *				 returnType="ig.spreadsheet.SpreadsheetPane[]"
	 */
	public getPanes(): void { return; } ;

	/**
	 * Executes the action associated with the specified id.
	 *
	 * @param action An [enumeration](ig.spreadsheet.SpreadsheetAction) or string that identifies the action to execute.
	 */
	public executeAction(action: Object): boolean { return; } ;

	/**
	 * Forces any pending deferred work to render on the spreadsheet before continuing
	 */
	public flush(): void { return; } ;

	/**
	 * Destroys the widget.
	 */
	public destroy(): void { return; } ;

	/**
	 * Notify the spreadsheet that style information used for rendering the spreadsheet may have been updated.
	 */
	public styleUpdated(): void { return; } ;
}