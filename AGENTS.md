diff --git a//dev/null b/AGENTS.md
index 0000000000000000000000000000000000000000..fa3133aba7426d6b283241e4a4ce7ac05f0cd727 100644
--- a//dev/null
+++ b/AGENTS.md
@@ -0,0 +1,22 @@
+# AGENTS Instructions
+
+This project follows the **AI Dev Tasks** workflow to plan and implement features with AI assistance.
+
+## Workflow
+
+1. **PRD Creation** – Use `tasks/create-prd.mdc` and ask clarifying questions before generating a Product Requirements Document.
+2. **Task Generation** – Use `tasks/generate-tasks.mdc` to turn the PRD into a high‑level task list and confirm before expanding into sub‑tasks.
+3. **Task Execution** – Follow `tasks/process-task-list.mdc` to complete one sub‑task at a time, marking each `[x]` when finished.
+
+These steps mirror the process described in the README under *Development Phases*.
+
+## Coding Guidelines
+
+- The prototype is built with React + Vite and expects Node.js 18.
+- Keep PRD and task files inside the `/tasks` directory.
+- Unit tests should be placed next to the files they test and run with `npx jest [optional/path/to/test/file]`.
+
+## Commit Practices
+
+- Make focused commits and update the task list whenever you complete a sub‑task.
+- Wait for user approval before starting the next sub‑task.
