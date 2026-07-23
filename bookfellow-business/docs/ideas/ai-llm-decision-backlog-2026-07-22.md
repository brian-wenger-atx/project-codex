# AI / LLM decision backlog (2026-07-22)

**Status:** backlogged — not Ready for www gen Builds.  
**Why:** Pre–full Build gate. Product jobs/UX are largely locked; **generation system** is not.  
**Charter (partial):** [model-routing-eval-2026-07-21.md](model-routing-eval-2026-07-21.md) · www-feed **P20**.  
**Related:** [pack-versioning-2026-07-22.md](pack-versioning-2026-07-22.md) (**P32**), www-feed **P6** pregen.

Do **not** treat R5 (pregen/gen) as Build-ready until clusters A–D have leans. Shell Ready (auth → Library → Overview) is separate.

## Suggested decision order

1. Pack schema + pregen DAG  
2. Spoiler + retrieval contract  
3. Prompt ownership  
4. Cost ceilings + QA/retry  
5. Bake-off plan (after 1–4 have shape)

---

## Explicit opens (already in docs)

| ID | Item | Notes |
|----|------|-------|
| AI-E1 | Who runs first bake-off | www lane vs one-off research |
| AI-E2 | Budget ceiling **$/unlocked-book** | pack gen + images |
| AI-E3 | Fiction vs NF **image word-budget** caps | exact numbers TBD |
| AI-E4 | Quiz **item-bank sizing** formula | by length + F/NF — P31 |
| AI-E5 | Post-chapter **solidify** gen/UX | backlog stub; job named only |
| AI-E6 | Who funds generation on **free unlocks** | publisher redeem / P9 |
| AI-E7 | Unit econ vs real AI + supply cost | allotment sketch unproven |
| AI-E8 | P12 voice agent depth | proposal; not Ready |
| AI-E9 | P21 listen-along visuals | research — sync / distraction / rights |
| AI-E10 | P24 citations prompt/rules | lean stated; not specified |
| AI-E15 | **Content density levels (P51)** | condensed / average / verbose — mainly chapter reviews; all-three at unlock vs lazy; Recap in/out of dial — [content-density-levels-2026-07-23.md](content-density-levels-2026-07-23.md) |

---

## Production clusters (backlog)

### A. Pack artifact contract

| ID | Decide |
|----|--------|
| AI-A1 | Exact asset list + schemas: chapter packs, Recap blocks, Looking Ahead, Pulse/Reflection, Questions, quiz bank, cast, audio script + TTS, image set |
| AI-A2 | Per-chapter vs whole-book fields; progress filters **visible** vs **stored** |
| AI-A3 | JSON schemas / validators for T1–T3 outputs |
| AI-A4 | What “light personalization” on mark-read regenerates vs leaves frozen (P6) |
| AI-A5 | **Density variants (P51)** — three chapter-review depths in schema vs one + view transform; which other assets share the dial |

### B. Prompt ownership & versioning

| ID | Decide |
|----|--------|
| AI-B1 | Which prompts Brian hard-locks beyond images (text / chat / MCQ / cast / recap / audio) |
| AI-B2 | Prompt repo layout, version ids, change control, who can edit |
| AI-B3 | System prompts per task; companion voice ≠ marketing voice |
| AI-B4 | F vs NF prompt dials beyond image words + future pointers |

### C. Spoiler enforcement (runtime)

| ID | Decide |
|----|--------|
| AI-C1 | Canonical progress model for models (chapter index / percent / multi-TOC) |
| AI-C2 | Chat retrieval slice (pack only? book text to mark? notes? quotes?) |
| AI-C3 | Refusal UX + “mark chapters…” algorithm (P10) |
| AI-C4 | How pregen stores future content without UI/chat leak |
| AI-C5 | Spoiler leak tests / rubric pass-fail thresholds |
| AI-C6 | Fiction vs NF rule matrix (Looking Ahead / citations / images) |

### D. Pregen orchestration

| ID | Decide |
|----|--------|
| AI-D1 | Job DAG order + parallelism + partial failure (parse → packs → quizzes → cast → images → TTS) |
| AI-D2 | “Ready enough” vs still building for unlock UX (P3) |
| AI-D3 | Retry / escalate policy per task (beyond T1 once); max spend |
| AI-D4 | Idempotency, cancel mid-pregen, re-queue after outage |
| AI-D5 | Shared catalog packs vs per-user packs |

### E. QA gates

| ID | Decide |
|----|--------|
| AI-E11 | Automated gates: JSON, OCR dupe/garble, schema, length, empty sections |
| AI-E12 | Human vs rubric QA on fiction for V1 |
| AI-E13 | Accept/reject → same model vs alternate; max attempts; fail-closed UX |
| AI-E14 | Grounding checks: quotes real? MCQ correct? cast zero-future? |

### F. Chat / RAG

| ID | Decide |
|----|--------|
| AI-F1 | Embeddings + chunking vs pack-only retrieval |
| AI-F2 | Context window budget; citation format; tool use |
| AI-F3 | Rate limits, abuse, cost per message, streaming |
| AI-F4 | Escalation for “hard questions” (T4) |

### G. Quizzes

| ID | Decide |
|----|--------|
| AI-G1 | Item types, distractor rules, difficulty |
| AI-G2 | Spoiler rules: taking quiz vs bank containing future items |
| AI-G3 | Bank scale (ties AI-E4); regen on pack refresh |
| AI-G4 | Scoring / history schema for gen side |

### H. Notes / voice / ASR

| ID | Decide |
|----|--------|
| AI-H1 | Notes-assist: polish vs verbatim; auto-create from chat? |
| AI-H2 | ASR provider class; language; latency; discard confirmation |
| AI-H3 | Voice agent turn-taking / barge-in / same retrieval as text |
| AI-H4 | Photo OCR for quotes — V1 in or out? |

### I. Images & TTS

| ID | Decide |
|----|--------|
| AI-I1 | Which surfaces get gen images day 1 |
| AI-I2 | Brand/art direction for gen images (vs marketing stills) |
| AI-I3 | OCR reject thresholds; hybrid UI-type overlay trigger |
| AI-I4 | TTS voice identity, ~2 min script structure, SSML, regen on refresh |
| AI-I5 | Is T10 TTS required for V1 with P15 Ready, or optional? |

### J. Cost & ops

| ID | Decide |
|----|--------|
| AI-J1 | Hard caps: $/unlock, $/chat-day, $/image, abort rules |
| AI-J2 | Observability: latency, reject rate, spoiler incidents, cost |
| AI-J3 | Private subprocessor / vendor map (not public Privacy dump) |
| AI-J4 | Re-bench cadence + owner of task→model config |

### K. Genre / content variance

| ID | Decide |
|----|--------|
| AI-K1 | F vs NF templates for Recap / solidify / Looking Ahead |
| AI-K2 | Genre buckets (P5) impact on gen layouts |
| AI-K3 | Confirm series / cross-book memory stays out of V1 gen |

### L. Codex → Bookfellow delta

| ID | Decide |
|----|--------|
| AI-L1 | Single checklist: what Codex did wrong / what workers change (ties P6/P20/P32) |

---

## Already leaned (do not re-litigate without cause)

Paid APIs only · route by task · pregen on unlock · mark-read ≈ spoiler bounds · build theater · versioned packs · T1–T10 task classes · Recap/audio/quiz/cast/chat product constraints · image text more NF / less fiction · Brian-lock image prompts · eval protocol sketched not run.

## Changelog

- 2026-07-23 — **P51 / AI-E15 / AI-A5** — content density levels (condensed / average / verbose); chapter reviews first
- 2026-07-22 — Filed from AI decision inventory; Brian: backlog all items; return focus to foundation docs.
