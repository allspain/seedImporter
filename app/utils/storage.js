function saveState(state) {
  chrome.storage.local.set({ state: JSON.stringify(state) });
}

// todos unmarked count
function setBadge(files) {
  if (chrome.browserAction) {
    const count = files.filter(file => !file.marked).length;
    chrome.browserAction.setBadgeText({ text: count > 0 ? count.toString() : '' });
  }
}

export default function () {
  return next => (reducer, initialState) => {
    const store = next(reducer, initialState);
    store.subscribe(() => {
      const state = store.getState();
      saveState(state);
      setBadge(state.files);
    });
    return store;
  };
}
