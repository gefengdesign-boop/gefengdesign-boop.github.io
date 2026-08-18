# MAP 词汇闪卡图像生成提示词规范

版本：G5–G6 词汇库第一版

适用范围：Language Usage、Reading、Math，共 680 个词条。

## 1. 项目目标

每张图片不是单纯装饰，而是帮助五年级学生理解单词含义、使用场景和抽象关系。图片需要让孩子在看到画面后，能够先猜出“这个词在表达什么”，再通过闪卡背面的中文含义和英文例句确认。

## 2. 统一风格提示词

将下面这段作为每张图片的固定风格前缀：

```text
Create a polished educational illustration for a Grade 5–6 vocabulary flashcard. Use a sophisticated contemporary 2D editorial cartoon style for upper-elementary students, not preschool art and not babyish cartoon style. Use confident clean linework, expressive but natural characters, refined shapes, subtle paper or brush texture, cinematic composition, intelligent visual storytelling, and clear visual hierarchy. The image should feel like a high-quality illustrated learning magazine for curious 10–12-year-old students.

Use a balanced palette of deep teal, navy, warm amber, muted coral, forest green, and cream. Use warm directional lighting with enough contrast for a mobile flashcard. Keep the composition landscape 4:3 with generous margins and a clear central subject. Make the concept understandable without written labels.
```

## 3. 统一负面提示词

每张图片都追加：

```text
Avoid preschool style, nursery illustration, chibi proportions, oversized head, baby toys, childish stickers, excessive pastel colors, visual clutter, photorealism, scary imagery, violence, brand logos, watermarks, random letters, random numbers, misspelled text, decorative captions, speech bubbles with words, and any written answer to the vocabulary question.
```

如果生成工具支持单独的 negative prompt，将上述内容放入 negative prompt；否则直接追加在主提示词末尾。

## 4. 固定生成要求

- 比例：4:3 横版
- 画面：一张图表达一个核心概念
- 文字：默认不生成文字；单词、中文和例句由网站闪卡界面叠加
- 年龄：10–12 岁
- 角色：可以反复使用同一组角色，例如 Mia、Leo、猫咪、狐狸和机器人
- 角色外观：自然儿童比例，不要幼儿园 Q 版
- 背景：有语境，但不能抢走概念主体
- 抽象词：使用关系、箭头、对比、顺序、因果、线索或漫画分格表达
- 数学词：优先使用真实物体、网格、数轴、面积、天平和几何图形

## 5. 图像表达类型

### A. Scene：具体场景

适合人物、地点、物品、情绪、故事元素和生活语境。

提示词结构：

```text
Show [main subject] in [specific age-appropriate setting]. Make [the vocabulary meaning] visually obvious through [action, expression, object, or relationship]. Include only a few supporting details: [supporting clues].
```

示例：

```text
Show a student carefully reading a map in a school library, with a clear destination marked by the composition but without any written labels. The setting should make the idea of a “purpose” visible: the student has a clear reason for reading and is selecting information toward a goal.
```

### B. Action：动作演示

适合 verb、adverb、动作、变化和行为特征。

提示词结构：

```text
Show the same character performing [action] in a visually clear way. Use body position, motion cues, and one contrasting example to show [precise meaning].
```

示例：

```text
Show a rabbit moving quickly across a garden while a turtle moves slowly in the same direction. Keep the two motion styles obvious through posture and subtle motion lines. The image should express “quickly” versus “slowly” without any words.
```

### C. Diagram：关系图示

适合介词、句子成分、因果、证据、逻辑、数学结构和空间关系。

提示词结构：

```text
Create a clean visual diagram embedded in a real scene. Show [elements] and make their relationship [relationship] unmistakable through position, arrows, grouping, balance, or alignment. Do not use written labels.
```

示例：

```text
Show a red ball inside a transparent box, beside the box, and underneath the box as three clean visual moments connected in one composition. Make the spatial relationship obvious without using words.
```

### D. Comparison：对比图

适合 adjective、compare、contrast、相同/不同、分数、百分比、图表和语法时态。

提示词结构：

```text
Create a clear side-by-side comparison of [A] and [B]. Make [target difference or shared feature] visually obvious while keeping the composition consistent. Use matching objects and camera angle so the learner notices the concept, not irrelevant decoration.
```

### E. Comic：连续漫画

适合时态、故事顺序、问题解决、句子完整性、写作结构、作者目的和主题。

提示词结构：

```text
Create a three- or four-panel silent comic showing [sequence]. The panels must clearly communicate [concept] through actions and visual consequences. Do not use captions, speech bubbles, or written labels.
```

## 6. Language Usage 映射规则

| 词条类型 | 推荐表达 | 典型示例 |
|---|---|---|
| noun | 人、地点、物品、想法泡泡组成的生活场景 | noun、school、idea |
| pronoun | 角色先出现，之后用指向关系替代 | pronoun、personal pronoun |
| verb | 明确动作和动作对象 | verb、action verb |
| adjective | 同一物体的大小、颜色、状态对比 | adjective、enormous |
| adverb | 同一动作的不同方式或速度 | adverb、slowly |
| preposition | 物体之间的空间关系 | under、between、beside |
| conjunction | 两个场景用桥、道路或连接物相连 | and、but、because |
| subject / object | 用箭头表示动作发出者和接受者 | subject、object |
| tense | 同一角色的过去、现在、未来三格 | past tense、future tense |
| voice | 主动和被动的动作方向对比 | active voice、passive voice |
| sentence fragment | 画面中故意留下未完成的动作或意思 | fragment |
| run-on sentence | 两个完整场景被不恰当地挤成一条线 | run-on sentence |
| punctuation | 不同标点对应不同表情和语气 | question mark、exclamation mark |
| writing organization | 开头、发展、结尾的卡片排序 | introduction、body、conclusion |
| thesis / evidence | 观点卡片与事实线索共同支撑结论 | thesis statement、supporting detail |

### Language Usage 示例提示词

#### noun

```text
Show a school library scene containing one student, one place, one physical object, and one thought represented by a subtle glowing thought bubble. Arrange them naturally so the concept of a “noun” is communicated as a person, place, thing, or idea. Do not include labels or written words.
```

#### preposition

```text
Create a clean three-part visual composition showing a red ball under a chair, beside the chair, and between two chairs. Use consistent objects and clear spacing so spatial relationships are unmistakable. No labels or text.
```

#### subject and object

```text
Show a girl handing a blue book to a boy at a school table. Use a subtle directional composition from the girl, through the book, toward the boy, making the person doing the action and the receiver of the action visually clear. No arrows with words, no labels.
```

#### past, present, future

```text
Create a sophisticated three-panel silent comic with the same student: yesterday she played basketball, today she is playing basketball, and tomorrow she is preparing to play basketball. Use lighting and visual context to distinguish time without written dates or captions.
```

#### sentence fragment

```text
Create a two-part educational comic. In the first part, a student starts an explanation with an unfinished thought and pauses at an open doorway, creating a strong sense that the meaning is incomplete. In the second part, another scene completes the thought visually. Do not use any text or punctuation.
```

## 7. Reading 映射规则

| 词条类型 | 推荐表达 | 典型示例 |
|---|---|---|
| main idea | 中央主题与多个细节汇聚 | main idea、central idea |
| detail | 放大镜找到具体信息 | detail、specific |
| evidence | 侦探线索支持一个结论 | evidence、support |
| inference | 画面不直说，用多个线索推导答案 | inference、imply |
| cause / effect | 多米诺骨牌、箭头或结果场景 | cause、effect |
| sequence | 三到四格连续过程 | sequence、first、finally |
| compare / contrast | 左右对比和共同部分 | compare、contrast |
| character trait | 通过角色行为表达性格 | brave、generous、selfish |
| setting | 时间、地点、天气和环境共同出现 | setting |
| conflict | 角色面对障碍或两难选择 | conflict、problem |
| theme | 故事行为最终产生可理解的启示 | theme、lesson |
| author’s purpose | inform、persuade、entertain 用不同场景表达 | author’s purpose |
| tone / mood | 色彩、表情、天气和构图表达情绪 | tone、mood |
| context clues | 生词周围出现动作、对比或结果线索 | context clues |
| figurative language | 真实场景与想象场景并置 | metaphor、simile |
| text structure | 文章结构变成道路、积木或流程 | problem/solution、cause/effect |

### Reading 示例提示词

#### inference

```text
Show a thoughtful 10–11-year-old girl in a school library examining a wet umbrella, rain drops on a window, muddy footprints, and a raincoat. She studies the clues and forms a quiet thought bubble showing a rainy street. Make it clear that the conclusion is not directly stated but is supported by several clues. Sophisticated upper-elementary editorial cartoon style, no words or labels.
```

#### main idea and detail

```text
Show a central glowing tree representing one big idea about protecting forests, with several smaller but clearly related details around it: planting a seedling, recycling paper, protecting an animal, and turning off a light. Compose the details as supporting branches around the central idea. No text.
```

#### cause and effect

```text
Create a clear left-to-right visual sequence: heavy rain fills a stream, the stream rises, and a footbridge becomes closed. Use subtle arrows or connected motion but no written labels. Make the first event and the resulting consequence visually obvious.
```

#### author’s purpose

```text
Create a three-part comparison: a writer explaining how volcanoes work with diagrams, a writer convincing classmates to protect nature with persuasive gestures, and a writer entertaining readers with a humorous story scene. Make the three purposes distinct through composition and mood, without any words.
```

## 8. Math 映射规则

| 词条类型 | 推荐表达 | 典型示例 |
|---|---|---|
| fraction | 披萨、蛋糕或色块切分 | fraction、equivalent fraction |
| numerator / denominator | 分数上下结构和总份数 | numerator、denominator |
| decimal | 十格或百格网格 | decimal、place value |
| percent | 100 格方阵 | percent |
| ratio | 两组物品并排对应 | ratio、proportion |
| equation | 两边平衡的天平 | equation、equivalent |
| variable | 神秘盒子或问号容器 | variable、unknown |
| expression | 运算符和数字组成的结构积木 | expression、term |
| integer | 正负数轴和 0 | integer、negative |
| coordinate | 方格地图上的点 | coordinate、ordered pair |
| angle | 两条射线张开的角度 | acute、right、obtuse |
| perimeter | 沿边缘走一圈 | perimeter |
| area | 铺满表面的方格 | area |
| volume | 立体方块装箱 | volume |
| parallel / perpendicular | 道路、铁轨或十字路口 | parallel、perpendicular |
| mean / median / mode | 数字卡片排序和统计 | mean、median、mode |
| probability | 彩色球罐或转盘 | likely、unlikely、certain |
| symmetry | 蝴蝶、雪花或折纸对折 | symmetry |
| graph | 调查结果的柱状图或折线图 | graph、data |

### Math 示例提示词

#### fraction

```text
Show a pizza divided into eight equal slices, with three slices clearly highlighted and the remaining five unhighlighted. Make the relationship between selected parts and the whole visually obvious. Use a refined upper-elementary educational illustration style, no numbers, labels, or written fractions.
```

#### variable

```text
Show a balanced mathematical mystery scene: a small closed box with a glowing question mark symbol kept abstract and minimal, placed on one side of a balance scale, while a known collection of blocks appears on the other side. Communicate that the box represents an unknown quantity. Avoid written equations and random numbers.
```

#### area and perimeter

```text
Create a split visual comparison of a rectangular garden. In one half, a child walks around the outer fence to show perimeter; in the other half, square tiles cover the entire inside surface to show area. Keep the same rectangle and viewpoint so the distinction is immediately understandable. No words or numbers.
```

#### coordinate

```text
Show a clean colorful square-grid treasure map with a small star placed at a clear intersection. Use the grid and the star position to communicate an ordered pair, but do not include axes labels, numbers, letters, or written coordinates.
```

## 9. 自动生成单词专属提示词

对每个词条，将以下信息替换到模板中：

```text
Vocabulary concept: [English term]
Chinese meaning: [Chinese meaning]
Learning context: [context from the vocabulary database]
Visual type: [Scene / Action / Diagram / Comparison / Comic]
Visual concept: [one-sentence visual expression]

[Global style prompt]

Create an image that expresses the vocabulary concept “[English term]” through [visual concept]. Use the learning context as semantic guidance: “[context]”. Keep the scene age-appropriate for a thoughtful Grade 5 student. The concept must be understandable from the image before the learner sees the answer. Do not write the English term, Chinese meaning, example sentence, labels, captions, or any answer in the image.

[Negative prompt]
```

## 10. 生成顺序

1. 先生成 20 张样例，覆盖三个学科和五种图像类型。
2. 确认角色年龄、画风成熟度、色彩和图片比例。
3. 优先生成高频、具体、容易通过图像理解的词条。
4. 再生成抽象词，使用关系图和连续漫画，不强行画成物品。
5. 每张图片生成后标记 `generated`，人工检查后标记 `reviewed`。
6. 发现图片表达不清时，只修改一个变量：动作、构图、背景或色彩，不要同时改变全部提示词。

## 11. 人工验收清单

- [ ] 图片表达的是词义，而不是只画了一个相关物体。
- [ ] 五年级学生能够根据画面猜到大致概念。
- [ ] 与词条的英文例句或语境不冲突。
- [ ] 没有低龄化、幼儿园化或过度 Q 版。
- [ ] 没有错误文字、乱码、品牌、logo 或水印。
- [ ] 手机小尺寸下主体仍然清楚。
- [ ] 与同一学科其他图片保持统一风格。
- [ ] 抽象概念使用了关系、因果、顺序或对比表达。
