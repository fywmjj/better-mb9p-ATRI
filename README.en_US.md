# ATRI -My Dear Moments- Visual Novel Port (Optimized for Mi Band 9 Pro)

> [!IMPORTANT]
> 
> This project is under active development and may contain unknown bugs or performance issues. Complete refactoring and testing take time, please be patient.

---

## 🤔 Why the Refactor?

The original version of the code exhibited several shortcomings, especially on resource-constrained devices like the Mi Band:

*   **Severe Performance Bottleneck:** When switching chapters (particularly those with large data volumes), CPU usage would spike to 100%, causing lag or unresponsiveness lasting 5 seconds or more, severely impacting the gameplay experience.
*   **Uninterruptible Typing Effect:** While dialogue text was being displayed character by character, players could not click to instantly reveal the full text, forced to wait for the effect to finish naturally, reducing reading efficiency.
*   **Flawed State Management:** The original code had potential risks of timer leaks (uncleared `setTimeout` from the typing effect), potentially leading to background resource consumption and unexpected behavior.
*   **UI/UX Needs Improvement:** The design of the save/load interface could be more intuitive and user-friendly; the live preview and saving logic in the settings screen could be optimized.
*   **Code Maintainability:** Extensive use of inline styles and absolute positioning made the code difficult to read, modify, and extend; insufficient error handling increased the risk of unexpected application crashes.

---

## 🔧 Changes I Made

Based on the issues above, I performed a comprehensive refactor and optimization of the codebase, primarily aiming to enhance performance, stability, and maintainability.

### ✨ Excellent Performance Boost

*   **Resolved the Core Chapter Switching Lag:** By implementing a strict timer management mechanism, ensuring that old typing effect `setTimeout` calls are completely cleared before switching scenes, chapters, or interrupting dialogue. This **fundamentally solved the 100% CPU issue**, drastically reducing chapter switch times from over 5 seconds to **less than 1 second**, achieving a near-seamless experience.
*   **Optimized I/O Operations:** Changed the settings saving trigger from slider's real-time change event to an explicit "Save" button click. This reduces unnecessary `storage` writes and avoids lag caused by frequent I/O.
*   **Improved Rendering Efficiency:** Used computed properties (`computed`) to cache conditional results, reducing repetitive calculations during template rendering. Removed numerous inline styles in favor of CSS classes; utilized Flexbox for layout, potentially allowing the rendering engine to work more efficiently.
*   **Instant Response:** Optimized the typing effect logic, allowing players to click the screen during the effect to **instantly display the full text**, and only advancing the dialogue on the subsequent click.

### 🧱 Stronger Program Robustness

*   **Comprehensive Error Handling:** Added `try...catch` or `fail` callback handling for critical operations like JSON parsing (chapter data, saves, settings), file reading (`file.readText`), and local storage access (`storage.get/set`), preventing crashes due to corrupted data or API failures.
*   **Boundary Checks:** Implemented validity checks when accessing array elements (e.g., scenes, save list) and object properties, avoiding errors caused by out-of-bounds indices or missing data.
*   **State Management:** Introduced clearer state flags (e.g., `isMenuVisible`, `recoveryMode`) and ensured resource cleanup (like timers) in appropriate lifecycle methods (e.g., `onHide`, `onDestroy`), enhancing application stability.

### 🧰 Easier to Maintain

*   **Optimized Code Structure:** Significantly reduced inline styles, adopting semantic CSS classes for styling. Widely used Flexbox for layout, making the code cleaner and more adaptive. Logically organized the template structure (e.g., separating dialogue, choice, menu layers).
*   **Clarified Logic:** Refactored JavaScript code with clearer variable and function names (e.g., `isMenuVisible`, `clearTypingTimeout`), introduced constants to replace magic numbers/strings, and decomposed complex functions (like `nextDialogue`) into smaller, single-responsibility functions.
*   **Configuration and State Separation:** Introduced `tempSettings` in the settings page, enabling real-time preview of changes and explicit saving, leading to clearer logic.
*   **Comments and Documentation:** Added code comments to explain key logic. This README itself serves to help other developers understand the changes.

---

## Disclaimer

*   This project is an unofficial port and optimization based on the original work "ATRI -My Dear Moments-", intended for learning and technical research purposes.
*   The developer is not affiliated with Aniplex.EXE, Frontwing, Makura, or Xiaomi in any way.
*   This application is completely free, and its source code is open under an open-source license. It is strictly prohibited for any commercial use.
*   Copyrights for game assets (images, text, music, etc.) belong to their respective original owners. Please support the official release.
*   The developer assumes no responsibility for any issues or copyright disputes that may arise from using this application.

## Acknowledgements

*   Thanks to **@liuyuze61** for creating the initial Mi Band Quick App port, which provided the foundation for this project.
*   Thanks to **@TLE** for providing initial ideas on performance optimization (although a different approach was ultimately adopted to fully resolve the issue).
*   Thanks to Aniplex.EXE, Frontwing, and Makura for creating the wonderful work "ATRI -My Dear Moments-".
