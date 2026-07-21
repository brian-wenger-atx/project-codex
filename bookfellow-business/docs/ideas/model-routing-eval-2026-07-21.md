# Model routing eval — Bookfellow (2026-07-21)

**Lean (Brian):** Gemini was convenience, not destiny. Evaluate **by task** — best quality at best price. Do **not** run one generic LLM for the whole site. Image / MCQ / parse / chat may each win on different providers.

**Hard rule unchanged:** paid/business APIs only for book text — free unpaid endpoints forbidden (train-on-prompts risk). See [north-star.md](../north-star.md).

**Prompt discipline (Brian):** agent-drafted image prompts without Brian review contributed to bad outputs (incl. **duplicated text** on images). **Hard-lock reviewed prompts** before production image jobs; version prompts in repo; no silent prompt drift.

**Status:** Strategy charter only until Brian asks for a **www bake-off plan** (fixtures + rubrics + scored runs). **2026-07-21:** Brian — leave as strategy; lots to build; www is where he wants it minus the **name** (pivot back to naming / rename).

## Principle

Route each job to the **cheapest model that meets the quality bar for that job**. Meter **cost per finished task** (retries + rejects count), not sticker $/MTok alone.

Industry pattern 2026: static task→model map first; learned routers later. Gateway options when www builds: LiteLLM / OpenRouter-style — www chooses.

## Bookfellow task map (eval backlog)

| Task ID | Job | Need (quality bar) | Cost posture | Candidate classes (start here — re-bench quarterly) | Notes |
|---------|-----|--------------------|--------------|-----------------------------------------------------|-------|
| T1 | **Ingest / parse** book → chapters, structure | High structure fidelity; low invent | Cheap bulk | Fast/cheap: Gemini Flash-class, GPT mini/Luna-class, DeepSeek Flash-class | JSON schema + validators; retry escalate once |
| T2 | **Pack draft** (recap, solidify, jog copy) | Voice + accuracy; no spoil beyond progress | Mid | Sonnet-class / Gemini Flash–Pro / GPT mid | Human or rubric QA on fiction |
| T3 | **MCQ / quiz gen** (per chapter + **progress-cumulative**) | Correct answer + plausible distractors; grounded | Mid–high | Strong reasoners for item quality; cheap for distractor expand | Separate rubric: no spoilers past marked progress |
| T4 | **Spoiler-safe chat** (user Q&A) | Bound to progress + pack + notes; cite chapter when useful | Mid live | Low-latency mid models; escalate hard questions | System prompt + retrieval slice is half the product |
| T5 | **Notes assist** (summarize chat/voice → note; resurface) | Faithful to *user* words; light polish | Cheap | Flash/mini | Don’t overwrite user voice |
| T6 | **Cast sheet** (characters *so far*) | Fiction-critical; zero future leak | Mid–high | Same as T2/T4 with stricter eval | Required product surface |
| T7 | **Image / visual assets** | Clean readable text (no garbled/dupe); on-brand; useful | Separate image $ | Eval Imagen / Flux / GPT-Image / Ideogram / etc. by **text rendering quality** (esp. multi-word) | **Brian lean:** text **belongs** on images — **more for nonfiction, less for fiction**. Not a “no text” product. |
| T8 | **While-listen visual beats** (future) | Informative; fiction lighter on words; nonfiction denser; syncable to chapter | Image + layout | Image model strong at typography + templates | See P21 — research before Build |
| T9 | **Voice → text** | Accurate, discard audio | ASR pricing | Whisper-class / Gemini audio / Deepgram etc. | Not an LLM chat model |
| T10 | **TTS jog audio** (~2 min) | Natural, cheap enough at scale | TTS $ | Provider bake-off | Optional V1 |

## Image failure mode (observed)

Gemini image sometimes: weird artifacts, **duplicated text** on the same canvas. That is a **quality** problem to solve — **not** a reason to strip words from images.

**Brian lean (locked 2026-07-21):** Images **should have words** on them — **more for nonfiction, less for fiction**. Agent “prefer little/no text” advice was wrong for this product.

Mitigations (keep the words; fix the render):

1. Brian-reviewed, versioned prompts (hard lock) — exact copy strings in prompt, “render each phrase once,” layout constraints
2. Bake-off models that **render multi-word text well** (score typography quality, not “avoid text”)
3. Automated reject: OCR/heuristic for repeated strings / illegible glyphs → regenerate (same or alternate model)
4. Optional hybrid later: composite UI type over art **only** if a model still fails a fixture — default remains baked-in copy
5. Genre dial: nonfiction denser labels/callouts; fiction sparser (mood + light labels)

## Eval protocol (www + business)

1. **Fixtures:** 2–3 owned titles (fiction + nonfiction), frozen chapter slices at progress P.
2. **Rubrics per task:** accuracy, spoiler leak rate, JSON validity, user-note fidelity, image typography quality (incl. dupe/garble rate — **with intended copy present**).
3. **Cost:** $ per accepted output (include retries).
4. **Pick winners** → config map `task → provider/model` in workers (not hardcoded “Gemini everywhere”).
5. **Re-run** when prices/models shift or fail rates climb.

## Stack implication

Www foundation already assumes **Python AI workers** + job claims — good home for a router. Business does **not** lock vendors here; this doc is the **eval charter**. Gemini may remain *a* option on some tasks after bake-off.

## Open

- Who runs first bake-off (www lane vs one-off research)?
- Budget ceiling $/unlocked-book for pack gen + images?
- Fiction vs nonfiction **word-budget** ranges for image prompts (exact caps TBD)?
