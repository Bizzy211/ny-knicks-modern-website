# Bizzy v2 - Automated Project Bootstrapping Orchestrator

> Transform project descriptions into fully initialized projects with GitHub repos, TaskMaster tasks, and assigned agents in one command.

---

## MANDATORY EXECUTION CHECKLIST

**STOP! You MUST complete ALL items below in order. Use TodoWrite to track progress. DO NOT show summary until all items validated.**

### Pre-Flight Checklist (Copy to TodoWrite)
```
[ ] 1. RESEARCH         - Run exa.ai + ref.tools for design/tech inspiration
[ ] 2. PRD              - Generate and save to .taskmaster/docs/prd.txt
[ ] 3. CONFIG           - Ensure ANTHROPIC_API_KEY in .env, update .taskmaster/config.json
[ ] 4. PARSE PRD        - Run mcp__task-master-ai__parse_prd
[ ] 5. EXPAND TASKS     - Expand at least 5 key tasks with subtasks
[ ] 6. KICK-OFF MEETING - Create "Kick-Off Meeting.md" in PROJECT ROOT (NOT optional!)
[ ] 7. GITHUB REPO      - Create repository (PRIVATE by default)
[ ] 8. GITHUB LABELS    - Create agent: and priority: labels
[ ] 9. GITHUB ISSUES    - Create issues for ALL tasks with agent labels
[ ] 10. GIT PUSH        - Commit and push all files to the repo
[ ] 11. AUTO-START      - Set Task 1 to "in-progress"
[ ] 12. VALIDATE        - Verify ALL outputs exist before showing summary
```

### Final Validation (REQUIRED before summary)
```javascript
// MUST verify these exist before completing:
const REQUIRED_OUTPUTS = {
  files: [
    '.taskmaster/docs/prd.txt',      // PRD document
    '.taskmaster/tasks/tasks.json',   // Generated tasks
    'Kick-Off Meeting.md'             // Team kickoff doc (PROJECT ROOT!)
  ],
  conditions: [
    'GitHub repo created and accessible',
    'Code committed and pushed to repo',
    'Task 1 status === "in-progress"'
  ]
};

// Run validation:
for (const file of REQUIRED_OUTPUTS.files) {
  if (!fs.existsSync(file)) {
    throw new Error(`MISSING: ${file} - Complete this step before summary!`);
  }
}
```

**IF ANY ITEM MISSING -> Complete it first. DO NOT skip steps. DO NOT show summary until validated.**

---

## Trigger Patterns

```javascript
const TRIGGER_PATTERNS = [
  /^\/bizzy\b/i,
  /\bbizzy\s+(?:project|setup|create|bootstrap)/i,
  /\bstart\s+new\s+project\s+with\s+bizzy/i,
];
```

---

## Complete Workflow

```
User: "/bizzy create a [project description]"
       |
       v
+------------------------------------------------------------------+
| PHASE 1: RESEARCH (exa.ai + ref.tools)                           |
|  - Branding inspiration & design systems                         |
|  - Technical documentation for mentioned technologies            |
|  - Code examples and best practices                              |
+------------------------------------------------------------------+
       |
       v
+------------------------------------------------------------------+
| PHASE 2: PRD GENERATION                                          |
|  - Detect project type                                           |
|  - Extract requirements with priorities                          |
|  - Generate structured PRD -> .taskmaster/docs/prd.txt           |
+------------------------------------------------------------------+
       |
       v
+------------------------------------------------------------------+
| PHASE 3: TASK MASTER AI                                          |
|  - Configure .taskmaster/config.json with Anthropic              |
|  - Parse PRD to generate tasks                                   |
|  - Expand 5+ key tasks with subtasks                             |
|  * CREATE "Kick-Off Meeting.md" (REQUIRED!)                      |
+------------------------------------------------------------------+
       |
       v
+------------------------------------------------------------------+
| PHASE 4: AGENT MATCHING                                          |
|  - Match tasks to agents based on keywords/type                  |
|  - Assign labels: agent:frontend-dev, agent:backend-dev, etc.    |
+------------------------------------------------------------------+
       |
       v
+------------------------------------------------------------------+
| PHASE 5: GITHUB SETUP                                            |
|  - Create PRIVATE repository                                     |
|  - Create agent and priority labels                              |
|  - Create issues for ALL tasks                                   |
+------------------------------------------------------------------+
       |
       v
+------------------------------------------------------------------+
| PHASE 6: AUTO-START & SUMMARY                                    |
|  * SET TASK 1 STATUS TO "in-progress" (REQUIRED!)                |
|  - Validate all outputs exist                                    |
|  - Display project overview and next steps                       |
+------------------------------------------------------------------+
```

---

## Phase 1: Research

```javascript
// Run these searches in PARALLEL for speed:
await Promise.all([
  mcp__exa__web_search_exa({
    query: `${projectType} design inspiration UI UX ${year}`,
    numResults: 5
  }),
  mcp__exa__web_search_exa({
    query: `${projectName} brand colors typography`,
    numResults: 5
  }),
  mcp__exa__get_code_context_exa({
    query: `${techStack.join(' ')} implementation examples`,
    tokensNum: 8000
  }),
  mcp__ref__ref_search_documentation({
    query: `${mainFramework} documentation best practices`
  })
]);
```

---

## Phase 2: PRD Generation

Save PRD to: `.taskmaster/docs/prd.txt`

Required sections:
- Project Overview
- Technical Requirements (tech stack)
- Brand Guidelines (colors, typography)
- Core Features (prioritized)
- Animation/Effect Specifications
- Page Structure
- Performance Requirements
- Agent Assignments table

---

## Phase 3: TaskMaster Integration

### Step 3a: Configure TaskMaster
```javascript
// Ensure .env has ANTHROPIC_API_KEY
// Update .taskmaster/config.json to use anthropic provider (not perplexity)
```

### Step 3b: Parse PRD
```javascript
await mcp__task_master_ai__parse_prd({
  input: '.taskmaster/docs/prd.txt',
  projectRoot: process.cwd(),
  force: true,
  numTasks: '15'  // Adjust based on project size
});
```

### Step 3c: Expand Tasks
```javascript
// Expand at least 5 key tasks
const keyTaskIds = ['1', '5', '7', '9', '14'];  // Adjust as needed
for (const id of keyTaskIds) {
  await mcp__task_master_ai__expand_task({
    id,
    projectRoot: process.cwd(),
    force: false,
    research: false,
    num: '5'
  });
}
```

### Step 3d: Create Kick-Off Meeting (REQUIRED!)
```javascript
// THIS IS MANDATORY - DO NOT SKIP
const kickOffPath = 'Kick-Off Meeting.md';  // PROJECT ROOT!
fs.writeFileSync(kickOffPath, generateKickOffContent({
  projectName,
  techStack,
  tasks,
  agentAssignments
}));
```

---

## Phase 4: Agent Matching

### Agent Assignment Rules
| Task Keywords | Primary Agent |
|---------------|---------------|
| animation, motion, parallax, GSAP, Framer | animated-dashboard-architect |
| UI, design system, styling, Tailwind | beautiful-web-designer |
| component, React, frontend, navigation | frontend-dev |
| API, backend, server, authentication | backend-dev |
| database, schema, SQL, Supabase | db-architect |
| performance, deployment, CI/CD | devops-engineer |
| test, accessibility, QA | test-engineer |

---

## Phase 5: GitHub Setup

### Step 5a: Create Repository
```bash
gh repo create ${repoName} --private --description "${description}"
```

### Step 5b: Create Labels
```bash
# Agent labels
gh label create "agent:frontend-dev" --color "1d76db"
gh label create "agent:animated-dashboard-architect" --color "f58426"
gh label create "agent:beautiful-web-designer" --color "006bb6"
gh label create "agent:backend-dev" --color "28a745"
gh label create "agent:db-architect" --color "6f42c1"
gh label create "agent:devops-engineer" --color "fd7e14"
gh label create "agent:test-engineer" --color "17a2b8"

# Priority labels
gh label create "priority:high" --color "d73a4a"
gh label create "priority:medium" --color "fbca04"
```

### Step 5c: Create Issues
```bash
# For EACH task, create an issue with agent label
gh issue create --title "Task ${id}: ${title}" \
  --body "${description}" \
  --label "agent:${assignedAgent},priority:${priority}"
```

---

## Phase 6: Auto-Start & Summary

### Step 6a: AUTO-START TASK 1 (REQUIRED!)
```javascript
// THIS IS MANDATORY - DO NOT SKIP
await mcp__task_master_ai__set_task_status({
  id: '1',
  status: 'in-progress',
  projectRoot: process.cwd()
});
```

### Step 6b: Validate All Outputs
```javascript
// Check ALL required files exist
const required = [
  '.taskmaster/docs/prd.txt',
  '.taskmaster/tasks/tasks.json',
  'Kick-Off Meeting.md'
];

for (const file of required) {
  if (!fs.existsSync(file)) {
    console.error(`MISSING: ${file}`);
    // CREATE IT NOW before continuing!
  }
}

// Verify Task 1 is in-progress
const tasks = await mcp__task_master_ai__get_task({ id: '1', projectRoot });
if (tasks.data.status !== 'in-progress') {
  await mcp__task_master_ai__set_task_status({ id: '1', status: 'in-progress', projectRoot });
}
```

### Step 6c: Display Summary
```markdown
## Bizzy Bootstrap Complete!

**Project:** ${projectName}
**Repository:** ${repoUrl}

| Metric | Value |
|--------|-------|
| Tasks | ${taskCount} |
| Subtasks | ${subtaskCount} |
| Issues | ${issueCount} |

### Agent Assignments
| Agent | Tasks |
|-------|-------|
${agentTable}

### Files Created
- `.taskmaster/docs/prd.txt`
- `.taskmaster/tasks/tasks.json`
- `Kick-Off Meeting.md`

### Next Steps
1. Task 1 is already **in-progress**
2. Run `task-master list` to see all tasks
3. Start building!
```

---

## Kick-Off Meeting Template

```markdown
# ${projectName} - Kick-Off Meeting

## Project Overview
${projectDescription}

## Technology Stack
${techStack.map(t => `- ${t}`).join('\n')}

## Team Composition

| Agent | Role | Tasks |
|-------|------|-------|
${agentTable}

## Agent Responsibilities
${agentResponsibilities}

## Project Timeline

| Phase | Milestone | Deliverables |
|-------|-----------|--------------|
| Phase 1 | Foundation | Setup, design system, infrastructure |
| Phase 2 | Core | Feature implementation |
| Phase 3 | Polish | Testing, optimization, deployment |

## Communication
- Update TaskMaster status as you progress
- Flag blockers immediately
- Use task comments for handoffs

## First Steps
1. Task 1 is already **in-progress**
2. Review: `task-master list`
3. View task: `task-master show 1`

---
*Generated by Bizzy v2 - JHC Agentic EcoSystem*
*Date: ${date}*
```

---

## Quick Reference

### Required MCP Tools
- `mcp__exa__web_search_exa`
- `mcp__exa__get_code_context_exa`
- `mcp__ref__ref_search_documentation`
- `mcp__task-master-ai__parse_prd`
- `mcp__task-master-ai__expand_task`
- `mcp__task-master-ai__get_tasks`
- `mcp__task-master-ai__set_task_status`

### Required Bash Commands
- `gh repo create`
- `gh label create`
- `gh issue create`

### Required Files to Create
1. `.taskmaster/docs/prd.txt`
2. `Kick-Off Meeting.md` (project root!)

### Required Final Actions
1. Set Task 1 to "in-progress"
2. Validate all outputs exist

---

*Skill Version: 2.0.0*
*Last Updated: December 2024*
*Part of JHC Agentic EcoSystem (A.E.S)*
