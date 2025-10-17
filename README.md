# Athletic Development Training System - Discovery & Validation Framework

[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-Click%20Here-blue?style=for-the-badge)](https://jlerm13.github.io/rebirth-workout-app/) 

---

## CORE HYPOTHESIS (REVISED)

### The Problem Statement
Coaches have **athlete management tools** (TeamBuildr, TeamWorks, Bridge) but need **coaching tools** that:
- Let them program the "destination" (macro periodization framework)
- Allow athletes to navigate the path based on their constraints (equipment, schedule, readiness)
- Don't force coaches to either over-program (creating 10 variations) OR manually manage everything

**Current Reality:**
- Coaches use TeamBuildr for data tracking, NOT for in-session workouts
- They write workouts on whiteboards because individualization is too manual
- They either create rigid programs athletes can't follow, or spend hours creating variations
- Athletes skip workouts during breaks/travel because programs don't fit their constraints

### The Solution Model (CLARIFIED)

**What we're actually building:**
1. **Coach programs ONCE** - Creates macro periodization framework (4-day strength block, exercise selection, set/rep schemes, progression model)
2. **Athlete completes ONE-TIME SETUP** - Answers 3 questions about schedule, equipment access, limitations
3. **App automatically adapts** - Shows personalized version of coach's program matched to athlete's context
4. **Optional micro-adjustments** - Athlete CAN swap exercise variations or adjust volume if needed, but doesn't HAVE to

**This is NOT:**
- ❌ Athlete makes decisions every workout (too much friction)
- ❌ Coach has to approve every adaptation (defeats time-saving purpose)
- ❌ Completely automated AI programming (coach still creates framework)

**This IS:**
- ✅ Personalized prescription with optional autonomy
- ✅ Default = "just show me the workout" (cognitive ease)
- ✅ Escape hatches = "let me adjust if I need to" (flexibility)
- ✅ Coach maintains programming control, app handles individualization

---

## UPDATED HYPOTHESIS STATEMENT

**OLD:** "Athletes want autonomy to adapt workouts to their constraints"

**NEW:** "Athletes will complete more workouts when their coach's program is automatically adapted to their context (equipment/schedule), with the option to make micro-adjustments when needed."

**This changes what we're validating:**
- Not just "do athletes want flexibility?"
- But "will automated adaptation + optional adjustments improve completion rates?"

---

## SUCCESS CRITERIA FOR PILOTS

### Pilot Structure
- **Duration:** 4 weeks (aligned with training block - winter break, spring semester, etc.)
- **Number of pilots:** 3 (different contexts: university team, high school team, club/remote athletes)
- **Participants per pilot:** 12-20 athletes + 1 coach

### Success Metrics

**Metric 1: Athlete Adoption**
- **Target:** 80%+ of athletes use the app at least once per week
- **Measurement:** App usage logs (logins, workouts viewed)
- **Kill criteria:** <50% of athletes use it even once = Problem isn't real or solution doesn't fit

**Metric 2: Coach Time Savings**
- **Target:** 80%+ reduction in programming time for individualization
- **Current state:** Coach spends 6-8 hours creating equipment variations manually
- **Target state:** Coach spends <2 hours programming macro framework, app auto-generates variations
- **Measurement:** Time tracking + coach interview at end of pilot
- **Kill criteria:** Coach says "this created MORE work" = Solution makes problem worse

**Metric 3: Athlete Experience**
- **Target:** Average rating of 4+ out of 5 on "easy to follow and matches my situation"
- **Measurement:** Post-workout surveys (sent automatically after each session)
- **Questions:**
  - How easy was today's workout to follow? (1-5)
  - Did the workout match your available equipment? (Yes/No)
  - Did you feel the workout was appropriate for your situation? (1-5)
- **Kill criteria:** <3 average rating = UX/trust problem

**Metric 4: Completion Rate Improvement** (NEW - CRITICAL)
- **Target:** Athletes complete 20%+ MORE workouts than previous unsupervised training period
- **Baseline:** Track what % of workouts they completed during last break/remote period
- **Pilot:** Track what % they complete with the app
- **Measurement:** Completed workout logs vs. prescribed workouts
- **Kill criteria:** Completion rate SAME or LOWER = App doesn't remove enough friction

### Pivot Triggers (What Would Make Us Adjust, Not Abandon)
- Athletes use app but completion rate is low → Exercise adaptation logic needs work
- Some positions/athletes use it, others don't → Need position-specific frameworks
- Coach loves it but athletes don't → Might be a coach tool, not athlete tool
- Athletes want more guidance on WHY exercises were swapped → Need education layer
- Setup friction stops adoption → Need to pre-fill more answers or reduce questions

---

## COACH INTERVIEW FRAMEWORK

### Pre-Interview Context
**Coaches to interview:**
- 2 High school strength coaches
- 1 Club basketball coach  
- 1 University volleyball S&C coach
- 1 University S&C department (3 people: 1 head, 2 assistants)
- 1 Head of coaching for D1 sports performance franchise

**Goal:** Validate problem + recruit 3 pilot partners by end of trip

---

### Phase 1: Validate the Problem (10 minutes)

**Opening:**
"I'm working on a hypothesis about a gap between athlete management tools and actual coaching needs. Can I test something with you?"

**Question 1:** "Do you currently use TeamBuildr or similar? If yes, what do you actually use it for vs. what you wish it did?"

**Listening for:**
- Do they use it for data tracking but NOT for actual workout delivery?
- Do they mention creating variations manually as a pain point?
- Do they describe the gap between "tool capabilities" and "coaching needs"?

**Question 2:** "When athletes train remotely or unsupervised - like winter break, summer training, travel - how do you currently handle individualization for equipment/constraints?"

**Listening for:**
- Do they send one generic program everyone tries to follow? (rigid)
- Do they create multiple variations manually? (time sink)
- Do they just hope athletes figure it out? (lack of solution)
- Do athletes skip workouts because program doesn't fit their situation? (validation of problem)

**Question 3:** "If you could program the macro framework once - periodization, exercise selection, progression - and have the athlete's app automatically adapt the specific exercises based on their equipment and situation, would that save you time or create more problems?"

**Listening for:**
- **Eyes light up** = potential pilot partner (they see the value immediately)
- **Skeptical but curious** = needs more clarity on how it works (show demo)
- **"That would never work because..."** = critical insight about why hypothesis might be wrong

**RED FLAGS (Pivot Signals):**
- "I don't actually spend time on variations, I just give everyone the same thing" = Time savings claim might be wrong
- "The problem isn't programming, it's getting athletes to do ANY workout" = Motivation problem, not programming problem
- "Athletes need to do exactly what I prescribe, no adaptations" = Philosophy mismatch, not our target coach

---

### Phase 2: Test Your Solution Concept (5 minutes)

**Present the concept clearly:**

"Here's how it would work:

**Step 1 - Coach Programs Once:**
You create the 4-week training block: periodization, exercise categories, set/rep schemes, intensity targets. Takes you 1-2 hours total.

**Step 2 - Athlete Setup (One Time):**
Before their first workout, athlete answers 3 quick questions:
- What's your schedule this block? (4-day, 3-day, 2-day)
- What equipment do you have access to? (Full gym, commercial gym, dumbbells, bodyweight)
- Any injuries or limitations?

**Step 3 - Automatic Adaptation:**
Every day when they open the app, they see TODAY'S workout already adapted to their situation. If you programmed 'Lower Body Strength: Back Squat 4x6' but they're at home with dumbbells, the app automatically shows 'Goblet Squats 4x6' - same training stimulus, different tool.

**Step 4 - Optional Adjustments:**
If they need to, they can swap an exercise variation (Bulgarian Split Squat instead of Goblet Squat) or adjust volume (feeling tired, drop to 3x6). But they don't HAVE to - the default just works.

You never have to create multiple versions. You never have to manually adjust for individual athletes. You program the destination, the app handles the path."

**Then ask:** "If that actually worked the way I described, would you use it?"

**Listening for:**
- **"Yes, that would save me so much time"** = Validation of time-saving value prop
- **"I'd worry about athletes picking the wrong variations"** = Trust/control concern (might need coach approval features)
- **"How does it know which exercises are equivalent?"** = Logic/credibility question (need to explain exercise database and training principles)
- **"That sounds complicated for athletes"** = UX concern (need to show actual demo)

---

### Phase 3: Recruit Pilot Partners (5 minutes)

**For coaches who are interested:**

"I'm running 3 structured pilots starting [timeframe - winter break in 2 weeks? spring semester?]. Each pilot is 4 weeks with one of your teams. Here's what I'd need from you and what you'd get:

**What I need from you:**
- 1-2 hours to program the macro framework (you'd do this anyway)
- Permission to have 12-20 athletes use the app for 4 weeks
- 15-minute check-in at week 2 (how's it going, any issues?)
- 30-minute debrief at week 4 (did it work, what would you change?)

**What you get:**
- Zero time spent creating equipment variations
- Real-time visibility into which athletes are training and which aren't
- Automatic tracking of their completed workouts
- Feedback that helps build a tool YOU actually want to use

**The goal isn't to sell you something - it's to find out if this actually solves your problem or if we need to build something different.**

Would you be interested in being Pilot 1/2/3?"

**Success = 3 confirmed pilot partners by end of trip**

**If hesitant:** "What would you need to see or know to feel comfortable piloting this?"

---

### Phase 4: Stay Open to Pivots (Ongoing Throughout Conversations)

**Remember:** The goal isn't to validate your solution. It's to understand if there's a real problem worth solving.

**If multiple coaches say:**
- "That's not my problem, my actual problem is..." = **GOLD** - this is a valuable pivot signal
- "I love the concept but it would never work because..." = **CRITICAL** - this reveals fatal flaws in assumptions
- "This would be useful but only if it also did X" = **FEATURE REQUEST** - write it down for v2, don't add to pilot scope

**Pivot vs. Feature Request Filter:**

**PIVOT SIGNAL** (changes your hypothesis):
- "I don't need programming help, I need athlete compliance tracking"
- "The problem isn't individualization, it's athletes not knowing HOW to do exercises"
- "This would be more useful for my assistant coaches than for athletes"

**FEATURE REQUEST** (doesn't change core hypothesis):
- "Can athletes message me through the app?"
- "Can I see video of their form?"
- "Can it integrate with our nutrition tracking?"

For pilots, you only care about pivot signals. Everything else gets written down for "if this works."

---

## ATHLETE INTERVIEW FRAMEWORK

### Pre-Interview Context
**Goal:** Validate whether athletes will actually USE the app and COMPLETE more workouts

**Key Questions We're Testing:**
1. Will they complete the one-time setup? (3 questions = too much friction?)
2. Will they trust automated exercise swaps? (or want to check with coach first?)
3. Will they use micro-adjustment features or ignore them?
4. Will this actually improve completion rates vs. current state?

---

### Part 1: Understand Current Reality (5 minutes)

**Question 1:** "Walk me through the last time you trained away from your normal facility - like over a break or when traveling. What did you do?"

**Listening for:**
- Did they follow their coach's program or skip it?
- Did they improvise or get confused?
- Did they feel guilty about not doing it "right"?
- Did they just do their own thing?

**Follow-up:** "How many of your coach's prescribed workouts did you actually complete?"
- All of them = High adherence baseline (your app needs to maintain this)
- Most of them = Medium adherence (your app could improve)
- Some or none = Low adherence (your app could unlock huge gains OR motivation is the real issue)

**Question 2:** "When your coach gives you a workout, what makes it easy to follow versus hard to follow?"

**Listening for:**
- Equipment availability issues ✅ (your hypothesis addresses this)
- Exercise confusion "I didn't know how to do that" ⚠️ (might need video library)
- Time constraints "I couldn't do all of it" ⚠️ (might need volume adjustment feature)
- Confidence issues "I wasn't sure if I was doing it right" ⚠️ (might need coaching cues)

**Question 3:** "Have you ever skipped a workout or changed what the coach programmed? What was the reason?"

**Listening for:**
- Equipment mismatch = Your hypothesis is correct
- Didn't understand exercise = Need better education layer
- Too tired/sore = Need readiness adjustment feature
- Forgot/didn't feel like it = Motivation problem, not programming problem

---

### Part 2: Test the Setup Friction (3 minutes)

**Present the concept:**

"Imagine your coach says you're using a new app for winter break training. Before it shows you any workouts, it asks you 3 questions ONE TIME:

1. What's your schedule this break? (4-day, 3-day, or 2-day per week)
2. What equipment do you have access to? (Full gym, commercial gym, dumbbells at home, bodyweight only)
3. Any injuries or limitations we should know about?

After answering those 3 questions, the app automatically shows you adapted workouts for the whole break. You don't have to answer again unless your situation changes."

**Ask:** "Would you do that 3-question setup, or would that feel like too much work before you can even see a workout?"

**Listening for:**
- **"Yeah, I'd answer 3 questions"** = Setup friction is acceptable ✅
- **"Wait, I only answer ONCE and it adapts everything?"** = They're excited about automation ✅
- **"I don't want to think about it, just show me the workout"** = Setup might be a barrier ⚠️
- **"What if my situation changes halfway through?"** = Need to clarify they can update anytime

**Follow-up if hesitant:** "What if your coach pre-filled some of those answers based on what they already know about you, and you just had to confirm or change them? Would that feel easier?"

**Kill Criteria:** If most athletes say setup feels like "too much work," need to reduce friction (pre-fill more, ask fewer questions, or make it optional)

---

### Part 3: Test Trust in Automated Adaptation (CRITICAL) (5 minutes)

This is THE most important validation question. If athletes don't trust the swaps, nothing else matters.

**Question:** "Let's say you told the app 'I'm home with just dumbbells.' Your coach programmed Barbell Back Squats 4x6 for the team. When you open the app, it automatically shows you Goblet Squats 4x6 with dumbbells instead - same training goal, different tool."

**Ask:** "Would you trust that swap and just do it? Or would you want to check with your coach first? Or would you ignore it and try to find a barbell anyway?"

**Listening for:**

**HIGH TRUST (Hypothesis validated):**
- "I'd trust it and do the goblet squats" ✅
- "If my coach set it up, I'd trust it" ✅
- "As long as I'm hitting the same goal, I don't care which exercise" ✅

**MEDIUM TRUST (Need education layer):**
- "I'd want to know WHY it picked that" ⚠️ = Need explanation feature
- "I'd trust it after using it a few times" ⚠️ = Need onboarding/education
- "I'd do it but check with coach later" ⚠️ = Need credibility building

**LOW TRUST (Hypothesis fails):**
- "I'd ask my coach first before doing anything different" ❌
- "I'd try to find a barbell no matter what" ❌
- "I wouldn't trust an app to change my coach's program" ❌

**Follow-up:** "What would make you trust those swaps?" 

**Listening for:**
- "If it explained WHY" = Need coaching rationale display
- "If my coach approved it" = Need coach validation feature (defeats purpose)
- "If other teammates were doing it too" = Social proof matters
- "Nothing, I just want to do what coach says" = Philosophy mismatch

**Pivot Signal:** If 70%+ of athletes don't trust automated swaps, you have two options:
1. Add coach approval workflow (but this defeats time-saving purpose)
2. Make adaptations visible to coach but don't require approval (transparency without friction)
3. Build credibility differently (show "Coach Smith's program, adapted for your equipment")

---

### Part 4: Test Micro-Adjustment Features (3 minutes)

**Question:** "After the app shows you today's workout - already adapted to your equipment - you notice there's a 'Swap Exercise' button next to Goblet Squats. You could click it to see alternatives like Bulgarian Split Squats or Lunges that hit the same goal."

**Ask:** "Would you ever use that button? Or would you just do whatever it shows you?"

**Listening for:**

**LOW USAGE (Good - validates default-first approach):**
- "I'd probably just do what it shows me" ✅ = They want prescription (low friction)
- "Maybe if I'm bored with an exercise" ✅ = Occasional use case
- "Only if something hurts" ✅ = Valid use case

**HIGH USAGE (Potential problem - might indicate default isn't working):**
- "I'd use it every time to see all my options" ⚠️ = Might get overwhelmed by choice
- "I'd swap a lot of exercises" ⚠️ = Either they don't trust defaults OR they want full autonomy

**Follow-up:** "What would make you click that swap button?"

**Common valid reasons:**
- Equipment is taken
- Exercise hurts/injury
- Bored with the movement
- Want to try something new

**If they say:** "I'd swap because I don't like what it picked" = Problem with adaptation logic

---

### Part 5: Test Volume Adjustment Feature (Planned) (3 minutes)

**Question:** "Imagine the app shows you 4 sets of 10 reps for Goblet Squats. But you're feeling really tired today - maybe you didn't sleep well, or you're sore from yesterday. What would you want the app to do?"

**Present 3 options:**

**Option A:** "Just do the 4x10 anyway, that's what coach programmed"

**Option B:** "Let me tap 'I'm tired' and it automatically adjusts to 3x8 for today"

**Option C:** "Show me coach's plan (4x10), but give me permission to do less if I decide to"

**Ask:** "Which feels right to you?"

**Listening for:**

**Option A preference:**
- "I should push through" = Rigid adherence mindset
- "Coach knows best" = Doesn't want autonomy
- Kill signal if 80%+ choose this: Your "athlete first" hypothesis might be wrong for this segment

**Option B preference:**
- "I'd want it to adjust automatically" = Wants auto-scaling ✅
- "If I'm tired, coach would tell me to do less anyway" = Trusts intelligent adaptation ✅

**Option C preference:**
- "I want to see the plan but make my own call" = Wants visibility + autonomy ✅
- "I'd feel guilty doing less unless it was 'approved'" = Need permission structure

**Critical follow-up:** "If you did less than what coach programmed - like 3x8 instead of 4x10 - would you feel like you 'failed' the workout, or like you made a smart decision?"

**Listening for:**
- **"Smart decision"** = They see adaptation as empowerment ✅
- **"Failed"** = They see adaptation as cheating/weakness ❌

This reveals whether your "athlete first" principle resonates emotionally, not just intellectually.

---

### Part 6: The Completion Question (MOST CRITICAL) (2 minutes)

**Question:** "Think about last winter break [or last time you trained away from the team]. How many of your coach's programmed workouts did you actually complete?"

**Get a specific answer:**
- "All of them" (100%)
- "Most" (70-90%)
- "Some" (40-70%)
- "A few" (10-40%)
- "None" (0-10%)

**Then ask:** "If you had an app that automatically adapted those workouts to whatever equipment you had available, do you think you would have completed MORE of them, the SAME amount, or LESS?"

**Listening for:**

**MORE (Hypothesis validated):**
- "Definitely more, because I skipped workouts that didn't match my equipment" ✅
- "More, because I wouldn't have to figure out substitutions" ✅
- "More, because I'd feel like coach built it FOR me, not just gave me a generic program" ✅

**SAME (Adaptation isn't the barrier):**
- "Same, because I'm pretty good about training anyway" = High baseline, app maintains it
- "Same, the problem wasn't equipment, I just didn't feel like training" = Motivation problem
- "Same, I already figured out substitutions on my own" = Your app doesn't add value for this athlete

**LESS (Red flag):**
- "Less, because I'd be confused by all the changes" = UX/trust problem
- "Less, because I'd spend time messing with options instead of working out" = Too much flexibility is bad

**Critical follow-up:** "Why do you think that would change things?"

Their reasoning reveals whether your solution addresses their real constraint or not.

---

### Part 7: The Motivation Reality Check (2 minutes)

This tests whether programming adaptation even matters, or if motivation/accountability is the real issue.

**Question:** "Imagine you have the PERFECT training app - automatically adapts to your equipment, super easy to use, tracks everything, gives you smart recommendations. But you're home alone during winter break, no coach checking in, no teammates around."

**Ask:** "On a scale of 1-5, how likely are you to actually open that app and train consistently?"
- 1 = "Probably wouldn't use it"
- 5 = "Would definitely use it"

**Follow-up:** "What made you pick that number?"

**Listening for:**

**HIGH SCORE (4-5) = Self-motivated athletes:**
- "I'm disciplined about training" ✅
- "I have goals I'm working toward" ✅
- "I feel guilty if I don't train" ✅
→ Your hypothesis works for this segment

**MEDIUM SCORE (2-3) = Situational motivation:**
- "Depends on how busy I am" ⚠️
- "I'd use it at first but might fall off" ⚠️
- "I need reminders or I forget" ⚠️
→ Need habit-building features (notifications, streaks, check-ins)

**LOW SCORE (1-2) = External accountability needed:**
- "I only train when coach makes me" ❌
- "I need someone to work out with" ❌
- "Honestly, nothing would make me train on my own" ❌
→ Your hypothesis fails for this segment - they need accountability, not better programming

**Follow-up for LOW scores:** "What WOULD make you train consistently on your own?"

**Listening for:**
- "If coach checked my logs" = Need coach accountability integration
- "If my teammates were doing it too" = Need social/team features
- "If someone was there with me" = Can't solve with an app
- "Nothing" = Not your target user

**Kill Criteria:** If 50%+ of athletes say they wouldn't use ANY app when unsupervised, you're not solving a programming problem. You're facing a motivation/accountability problem. That's a completely different product.

---

## VALIDATION DECISION TREE

After your trip, use this framework to decide: GO / PIVOT / STOP

### GO SIGNALS (Green light for pilots)
**From Coaches:**
- ✅ 3+ coaches confirm they waste time creating equipment variations
- ✅ 2+ coaches immediately say "yes" to piloting
- ✅ They describe remote/unsupervised training as a current pain point
- ✅ They trust the concept of automated adaptation within their framework

**From Athletes:**
- ✅ 60%+ say they'd complete MORE workouts with adapted programming
- ✅ 70%+ say they'd trust automated exercise swaps
- ✅ Setup friction (3 questions) is acceptable
- ✅ Most are self-motivated enough to use an app when unsupervised

**Action:** Run the 3 pilots with clear success metrics

---

### PIVOT SIGNALS (Change approach, not goal)

**Pivot 1: Athletes don't trust automated swaps**
- Problem is real (equipment mismatch stops workouts)
- But solution needs human validation
- **New approach:** Coach reviews/approves adaptations once, then they're saved for that athlete
- **Or:** Make adaptations visible to coach in real-time (transparency builds trust)

**Pivot 2: Setup friction is too high**
- Problem is real, concept resonates
- But 3-question setup stops adoption
- **New approach:** Pre-fill everything based on team defaults, athletes just confirm
- **Or:** Progressive disclosure (show workout first, ask setup questions as they use it)

**Pivot 3: Athletes want prescription, not decisions**
- Problem is real (equipment mismatch)
- But they don't want autonomy/choices
- **New approach:** Remove ALL micro-adjustments, just show one adapted workout
- **Or:** Make it "Chipotle-simple" - pick equipment once, everything else is automatic

**Pivot 4: Coaches don't actually waste time on variations**
- They give everyone the same program and don't care about individualization
- **New approach:** Focus on athlete experience (completion rates), not coach time savings
- **Or:** Target different coach segment (club/remote coaches who MUST individualize)

**Pivot 5: Motivation/accountability is the real barrier**
- Athletes would skip workouts even with perfect programming
- **New approach:** Add social features (team leaderboards, train-with-teammate matching)
- **Or:** Add coach check-in features (athletes know coach can see their logs)
- **Or:** Add habit-building features (streaks, reminders, minimal viable workout options)

---

### STOP SIGNALS (Hypothesis is wrong)

**From Coaches:**
- ❌ 6+ out of 8 coaches say "That's not my problem, my problem is..."
- ❌ Nobody wants to pilot it, even when presented clearly
- ❌ They actively prefer manual control over automated adaptation
- ❌ TeamBuildr/existing tools already solve this for them

**From Athletes:**
- ❌ 70%+ say they wouldn't use ANY app when unsupervised
- ❌ 70%+ say they wouldn't trust automated swaps at all
- ❌ They already complete 90%+ of workouts (no room for improvement)
- ❌ They describe a completely different problem than equipment/adaptation

**Action:** Either find a different problem to solve in the same space, or move to a different opportunity entirely

---

## POST-TRIP ANALYSIS FRAMEWORK

After your trip, answer these questions:

### 1. Problem Validation
- **Did coaches confirm they waste significant time creating equipment variations?**
  - If YES → Time-saving value prop is valid
  - If NO → Need to find different value prop or different coach segment

### 2. Solution Validation  
- **Did athletes express trust in automated exercise swaps?**
  - If YES → Core mechanism works
  - If NO → Need coach validation layer or different approach

### 3. Pilot Recruitment
- **Did you get 3 confirmed pilot partners?**
  - If YES → You're ready to build and test
  - If NO but lots of interest → Might need to reduce friction/commitment
  - If NO and low interest → Hypothesis might be wrong

### 4. Completion Rate Hypothesis
- **Did athletes say they'd complete MORE workouts with adapted programming?**
  - If 60%+ said MORE → Strong signal to proceed
  - If most said SAME → Adaptation isn't the barrier
  - If many said LESS → Solution creates confusion

### 5. Pivot vs. Persevere
- **Did multiple coaches/athletes describe a DIFFERENT problem?**
  - Document what they said
  - Is that problem bigger/better than your current hypothesis?
  - Would solving THAT problem be more valuable?

---

## PILOT SUCCESS CRITERIA (DETAILED)

### For Each Pilot

**Pre-Pilot (Week 0):**
- Coach programs macro framework (track time spent)
- Athletes complete one-time setup (track completion rate and time spent)
- Baseline question: "How many workouts did you complete last [break/remote period]?"

**During Pilot (Weeks 1-4):**
- Track daily: App opens, workouts viewed, workouts logged as complete
- Track usage of features: Exercise swaps clicked, volume adjustments made
- Track athlete feedback: Post-workout surveys (1-5 ratings on ease/appropriateness)

**Mid-Pilot Check (Week 2):**
- 15-min coach interview: "What's working? What's broken? Would you keep using this?"
- Review metrics: Are athletes using it? Completing workouts?
- Make minor UX adjustments if needed (don't change core hypothesis)

**Post-Pilot (Week 5):**
- Final metrics:
  - **Adoption rate:** X% of athletes used app weekly
  - **Completion rate:** Athletes completed X% of prescribed workouts (vs. Y% baseline)
  - **Time savings:** Coach spent X hours programming (vs. Y hours previously)
  - **Experience rating:** Average Z out of 5 on ease/appropriateness
- 30-min debrief interviews:
  - Coach: "Did this save you time? Would you use it next block? What would make it better?"
  - Athletes (sample 5-8): "Did you complete more workouts? Why/why not? What would improve it?"

**Decision Criteria After 3 Pilots:**

**SCALE (All 3 pilots hit targets):**
- 80%+ adoption ✅
- 80%+ time savings ✅
- 4+ rating ✅
- 20%+ completion rate improvement ✅
→ Build v2 with feature additions, start beta testing with more coaches

**ITERATE (2 of 3 pilots hit targets):**
- Identify patterns in what worked vs. didn't
- Refine hypothesis based on learning
- Run 2-3 more pilots with adjusted approach

**PIVOT (1 or 0 pilots hit targets):**
- Hypothesis is directionally wrong
- Use insights to identify actual problem
- Test new hypothesis with new pilots

**STOP (Pilots reveal no problem worth solving):**
- Athletes don't need better programming, they need accountability
- Coaches don't waste time on variations
- Existing tools already solve this
→ Find different opportunity in sports performance space

---

## FEATURE SCOPE FOR PILOTS (MVP ONLY)

### IN SCOPE (Minimum to test hypothesis)

**For Coaches:**
- Program builder: Create macro framework (exercises, set/rep schemes, progression)
- Team setup: Add athletes, assign program
- Dashboard: See which athletes completed workouts (basic visibility)

**For Athletes:**
- One-time setup: Answer 3 questions (schedule, equipment, limitations)
- Workout display: See today's workout (already adapted to their setup)
- Exercise library: See demo images/descriptions for each exercise
- Log completion: Mark workout as done
- Basic swap: Click "swap exercise" to see alternatives (if needed)

**Automated Logic:**
- Equipment mapping: Barbell exercises → DB/bodyweight equivalents based on athlete's setup
- Schedule adaptation: 4-day program → 3-day or 2-day if athlete selected that

### OUT OF SCOPE (Even if coaches/athletes ask)

**Do NOT add to pilots (write down for v2):**
- ❌ Video instruction for exercises
- ❌ Form analysis / video upload
- ❌ Messaging between coach-athlete
- ❌ Nutrition tracking
- ❌ Sleep/recovery tracking
- ❌ Social features (leaderboards, team challenges)
- ❌ Integration with TeamBuildr/other platforms
- ❌ Advanced analytics/reporting
- ❌ Custom exercise creation by athletes
- ❌ AI-generated programs
- ❌ Volume auto-adjustment based on readiness (track interest, build later)

**Why this is critical:**
- Pilots are hypothesis tests, not product launches
- Every feature adds development time and complexity
- Every feature adds potential points of failure
- Goal is to test core hypothesis as cleanly as possible

**How to handle feature requests:**
- "I love that idea - for this pilot I'm keeping scope really tight to move fast. But I'm tracking what matters most for v2. If the pilot works, [their feature] is exactly what we'd add next."
- Write it down in front of them (shows you heard them, builds trust)

---

## KEY INSIGHTS TO WATCH FOR

### From Coaches

**Time-Saving Validation:**
- Do they currently spend 6-8 hours creating variations? (Validates problem size)
- Would "program once, auto-adapt" actually save 80% of that time? (Validates solution)
- Or is the time sink somewhere else? (Pivot signal)

**Control vs. Automation:**
- Do they trust the app's adaptation logic?
- Do they want to review/approve swaps? (Defeats purpose)
- Do they want visibility without approval? (Design insight)

**Different Problems:**
- "My problem isn't programming, it's..." = Listen carefully
- If multiple coaches describe same different problem = Pivot opportunity

### From Athletes

**Trust in Automation:**
- Would they trust swaps or check with coach first?
- What would build credibility? (Coach name, explanation, teammate usage)

**Motivation vs. Programming:**
- Would they complete MORE workouts or SAME amount?
- If SAME, what's the real barrier? (Accountability, habit, time, motivation)

**Autonomy vs. Simplicity:**
- Do they want decisions or just a workout that works?
- Is "athlete first" about autonomy or about ease?

**Setup Friction:**
- Is 3 questions acceptable or too much?
- Would pre-filling help or is the concept itself unclear?

### Patterns to Watch For

**If coaches love it but athletes don't:**
- Might be a coach tool (visibility/management) not athlete tool
- Athletes might need different value prop (accountability, not adaptation)

**If beginners love it but experienced athletes don't:**
- Experienced athletes might prefer full control or already know how to adapt
- Target market might be beginners / high school / club athletes

**If it works for remote but not in-facility:**
- Might be specifically a "remote training" tool
- In-facility, whiteboard works fine

**If athletes forget to log workouts:**
- Completion data becomes unreliable
- Might need reminders or simplified logging

---

## RISKS AND MITIGATION STRATEGIES

### Risk 1: Athletes don't trust automated swaps
**Mitigation:**
- Show "Coach [Name]'s program, adapted for your equipment" (attribution builds trust)
- Add "Why this exercise?" button that explains the swap
- Pilot with coach's most trusted athletes first (social proof for others)

### Risk 2: Setup friction stops adoption
**Mitigation:**
- Pre-fill answers based on team defaults (athletes just confirm)
- Make setup optional (show default workout immediately, refine over time)
- Reduce from 3 questions to 2 or even 1 (equipment only)

### Risk 3: Coaches don't actually waste time on variations
**Mitigation:**
- Focus value prop on athlete completion rates, not coach time savings
- Target coaches who actively want individualization (club/remote coaches)

### Risk 4: Athletes skip workouts due to motivation, not programming
**Mitigation:**
- Add basic accountability features (coach can see logs)
- Add reminder notifications
- Consider team/social features in v2

### Risk 5: Adaptation logic is wrong (swaps don't match training stimulus)
**Mitigation:**
- Have credible coach validate exercise equivalencies before pilot
- Test with small group first (1-2 athletes) before full pilot
- Build feedback loop: "Was this exercise appropriate?" after each workout

---

## QUESTIONS TO ASK YOURSELF POST-TRIP

1. **Did coaches confirm the time-sink problem?**
   - If yes → Proceed with time-saving value prop
   - If no → Shift to athlete completion value prop

2. **Did athletes express trust in automated swaps?**
   - If yes → Core mechanism validated
   - If no → Add transparency/education or get coach validation

3. **Did I get 3 pilot partners?**
   - If yes → Start building
   - If no → Why? Too much commitment? Unclear value? Wrong segment?

4. **What problem did coaches/athletes describe that I wasn't expecting?**
   - Is that a bigger problem than the one I'm solving?
   - Should I pivot to that problem instead?

5. **Am I more afraid of being wrong or excited about learning?**
   - If afraid → I'm too attached to my solution
   - If excited → I'm approaching this the right way

---

## NEXT STEPS AFTER TRIP

### If You Get Validation + 3 Pilots:
1. **Build pilot MVP** (4 weeks)
   - Coach program builder
   - Athlete app with auto-adaptation
   - Basic logging and feedback collection

2. **Run 3 pilots simultaneously** (4 weeks each)
   - University team during winter break
   - High school team during season
   - Club/remote athletes

3. **Analyze results** (1 week)
   - Hit success criteria? → Scale
   - Mixed results? → Iterate
   - Missed criteria? → Pivot or stop

### If You Don't Get Validation:
1. **Analyze the pattern:** What DID coaches/athletes say they need?
2. **Decide:** Pivot to that problem or look for different opportunity?
3. **Update hypothesis and repeat discovery** (but with NEW hypothesis, don't keep testing same thing)

---

## FINAL REMINDER

**You're not validating a solution - you're testing whether a problem exists.**

The point of this trip is NOT to convince coaches/athletes that your app is good.

The point is to discover:
1. Do they have the problem you think they have?
2. Would your solution actually solve it?
3. Or is there a different problem worth solving?

All three outcomes are valuable. Stay curious, not attached.

---

## APPENDIX: SAMPLE PILOT TIMELINE

### Pilot 1: Brandon's Basketball Team - Winter Break

**Week -1 (Prep):**
- Brandon programs 4-week winter training block (macro framework)
- Athletes complete one-time setup before leaving campus
- Baseline survey: "How many workouts did you complete last winter break?"

**Week 1-4 (Active Pilot):**
- Athletes train using app (adapted to home/commercial gym)
- Daily: Post-workout survey (1-5 rating: easy to follow? matched situation?)
- Weekly: Completion rate tracking (% of prescribed workouts completed)

**Week 2 (Mid-Pilot Check):**
- 15-min call with Brandon: "What's working? What's not? Any issues?"
- Review metrics: Adoption rate, completion rate so far

**Week 5 (Post-Pilot):**
- Final metrics analysis:
  - 85% of athletes used app weekly ✅
  - Athletes completed 75% of workouts (vs. 45% last winter) ✅
  - Brandon spent 2 hours programming (vs. 8 hours creating variations) ✅
  - Average rating: 4.2/5 ✅
- 30-min debrief with Brandon
- Survey 8 athletes for qualitative feedback

**Decision:** All metrics hit → Pilot 1 success → Continue with Pilots 2 & 3

---

END OF DOCUMENT
