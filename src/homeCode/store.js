import { observable, computed, action } from 'mobx';
import { toJS } from 'mobx';

class State {
  @observable
  keyArray = [
    {
      applicationKey: '331b4bdf-7ace-4265-94f1-b01504c78743',
      hmacKey: '44f4f4ce-fd0f-48a1-b517-65d2b9465413'
    },
    {
      applicationKey: '143af891-408e-43a9-9b2e-e43bc6c26793',
      hmacKey: '8992f8b6-0f74-4dd6-a578-c7ae4ca76302'
    }
  ];
  @observable
  key = {
    applicationKey: '331b4bdf-7ace-4265-94f1-b01504c78743',
    hmacKey: '44f4f4ce-fd0f-48a1-b517-65d2b9465413'
  };
  @observable
  keyNum = 0;
  @action.bound
  keyChange() {
    this.keyNum++;
    this.key = this.keyArray[this.keyNum % this.keyArray.length];
  }
  @observable
  tabChangeEvent = false;
  @action.bound
  updateTabChangeEvent(bool) {
    this.tabChangeEvent = bool;
  }
  @observable
  editorValue = '';
  @action.bound
  updateEditorValue(text) {
    this.editorValue = text;
  }
  @observable
  saveEvent = null;
  @action.bound
  updateSaveEvent(func) {
    this.saveEvent = func;
  }
  @observable
  executeHTML = null;
  @action.bound
  updateExecuteHTML(func) {
    this.executeHTML = func;
  }
  @observable
  runButton = null;
  @action.bound
  updateRunButton(element) {
    this.runButton = element;
  }
  @observable
  listButton = null;
  @action.bound
  updateListButton(element) {
    this.listButton = element;
  }
  @observable
  recycleButton = null;
  @action.bound
  updateRecycleButton(element) {
    this.recycleButton = element;
  }
  @observable
  stopButton = null;
  @action.bound
  updateStopButton(element) {
    this.stopButton = element;
  }
  @observable
  hotReload = false;
  @action.bound
  updateHotReload(bool) {
    this.hotReload = bool;
  }
  @observable
  editor = null;
  @action.bound
  updateEditor(editor) {
    this.editor = editor;
  }
  @observable
  iframeElement = null;
  @action.bound
  async updateIframeElement(element) {
    this.iframeElement = await element;
  }
  @observable
  textFile = [
    {
      id: 0,
      type: 'html',
      fileName: 'index.html',
      removed: false,
      text: '',
      undoStack: null,
      redoStack: null,
      handWritingFormulaAreaId: 0,
      handWritingFormulaAreas: []
    }
  ];
  @action.bound
  pushTextFile(file) {
    if (
      !this.textFile.some(e => {
        return e.fileName === file.fileName;
      })
    ) {
      this.textFile.push(file);
      this.changeActiveTextFile(this.textFile.length - 1);
      setTimeout(() => {
        this.editor.session.$undoManager.reset();
      }, 10);
    }
  }
  @action.bound
  async removeTextFile(file) {
    const nextTextFile = this.textFile.filter(e => e !== file);
    this.textFile = await nextTextFile;
  }
  @action.bound
  async clearTextFile() {
    this.textFile = await [];
  }
  @observable
  activeTextFile = this.textFile[0];
  @action.bound
  async changeActiveTextFile(index) {
    this.activeTextFile = await this.textFile[index];
  }
  @computed
  get activeTextFileId() {
    return this.textFile.findIndex(e => {
      return e.fileName === this.activeTextFile.fileName;
    });
  }
  @action.bound
  updateActiveText(text) {
    this.activeTextFile.text = text;
  }
  @action.bound
  async updateActiveUndoStack(undoStack) {
    this.activeTextFile.undoStack = await undoStack;
  }
  @action.bound
  async updateActiveRedoStack(redoStack) {
    this.activeTextFile.redoStack = await redoStack;
  }
  @observable
  id = 0;
  @action.bound
  incrementId() {
    this.id++;
  }
  @observable
  runAreaRenderingFlag = false;
  @action.bound
  updateRunAreaRenderingFlag(bool) {
    this.runAreaRenderingFlag = bool;
  }
  @observable
  listAreaRenderingFlag = false;
  @action.bound
  updateListAreaRenderingFlag(bool) {
    this.listAreaRenderingFlag = bool;
  }
  @observable
  runAreaPosition = { x: window.innerWidth - 600, y: 100 };
  @action.bound
  updateRunAreaPosition(x, y) {
    this.runAreaPosition.x = x;
    this.runAreaPosition.y = y;
  }
  @observable
  runButtonColor = {
    backgroundColor: '#eee',
    fontColor: ' rgb(0, 185, 158)'
  };
  @action.bound
  updateRunButtonColor(obj) {
    this.runButtonColor = obj;
  }
  @observable
  listButtonColor = {
    backgroundColor: '#eee',
    fontColor: ' rgb(0, 185, 158)'
  };
  @action.bound
  updateListButtonColor(obj) {
    this.listButtonColor = obj;
  }
  @observable
  recycleButtonColor = {
    backgroundColor: '#eee',
    fontColor: ' rgb(0, 185, 158)'
  };
  @action.bound
  updateRecycleButtonColor(obj) {
    this.recycleButtonColor = obj;
  }
  @action.bound
  pushHandWritingFormulaAreas(obj) {
    this.activeTextFile.handWritingFormulaAreas.push(obj);
  }
  @action.bound
  updateHandWritingFormulaAreas(obj) {
    this.activeTextFile.handWritingFormulaAreas = obj;
  }
  @action.bound
  updateHandWritingFormulaAreaAnchor(num, x, y) {
    this.activeTextFile.handWritingFormulaAreas[num].x = x;
    this.activeTextFile.handWritingFormulaAreas[num].y = y;
  }
  @action.bound
  updateHandWritingFormulaAreaSize(num, width, height) {
    this.activeTextFile.handWritingFormulaAreas[num].width = width;
    this.activeTextFile.handWritingFormulaAreas[num].height = height;
  }
  @action.bound
  updateHandWritingFormulaAreaVisible(textFileNum, num, bool) {
    this.textFile[textFileNum].handWritingFormulaAreas[num].visible = bool;
  }
  @action.bound
  updateHandWritingFormulaAreaExchange(num, bool) {
    this.activeTextFile.handWritingFormulaAreas[num].exchange = bool;
  }
  @action.bound
  updateHandWritingFormulaAreaCodeEditor(num, editor) {
    this.activeTextFile.handWritingFormulaAreas[num].codeEditor = editor;
  }
  @action.bound
  updateHandWritingFormulaAreaHandWritingFormulaEditor(num, editor) {
    this.activeTextFile.handWritingFormulaAreas[
      num
    ].handWritingFormulaEditor = editor;
  }
  @action.bound
  updateHandWritingFormulaAreaCode(num, code) {
    this.activeTextFile.handWritingFormulaAreas[num].code = code;
  }
  @action.bound
  updateHandWritingFormulaAreaCounter(num, count) {
    this.activeTextFile.handWritingFormulaAreas[num].glslResultCounter = count;
  }
  @action.bound
  updateHandWritingFormulaAreaResultVariable(num, vari) {
    this.activeTextFile.handWritingFormulaAreas[num].resultVariable = vari;
  }
  @action.bound
  updateHandWritingFormulaAreaModel(num, model) {
    this.activeTextFile.handWritingFormulaAreas[num].model = model;
  }
  @action.bound
  updateHandWritingFormulaAreaResizeEvent(num, bool) {
    this.activeTextFile.handWritingFormulaAreas[num].resizeEvent = bool;
  }
  @action.bound
  updateHandWritingFormulaAreaBackgroundWord(num, word) {
    this.activeTextFile.handWritingFormulaAreas[num].backgroundWord = word;
  }
  @action.bound
  updateHandWritingFormulaAreaId(num) {
    this.activeTextFile.handWritingFormulaAreaId = num;
  }
  @action.bound
  incrementHandWritingFormulaAreaId() {
    this.activeTextFile.handWritingFormulaAreaId++;
  }
}

export default State;
