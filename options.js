// Save options to Chrome storage
function saveOptions() {
    const theme = document.getElementById("theme").value;
    const defaultAction = document.getElementById("default-action").value;
    const autoloadSample = document.getElementById("autoload-sample").checked;
  
    chrome.storage.sync.set(
      { theme, defaultAction, autoloadSample },
      () => {
        const status = document.getElementById("status");
        status.textContent = "Options saved!";
        setTimeout(() => (status.textContent = ""), 1500);
      }
    );
  }
  
  // Load options from Chrome storage
  function loadOptions() {
    chrome.storage.sync.get(
      { theme: "light", defaultAction: "beautify", autoloadSample: false },
      (items) => {
        document.getElementById("theme").value = items.theme;
        document.getElementById("default-action").value = items.defaultAction;
        document.getElementById("autoload-sample").checked = items.autoloadSample;
      }
    );
  }
  
  document.getElementById("save-options").addEventListener("click", saveOptions);
  document.addEventListener("DOMContentLoaded", loadOptions);
  