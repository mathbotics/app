# app
Monorepo for Mathbotics services.

DO NOT MERGE THIS README...

current changes are:
- Changes on the size of Slide Menu Sidebar including the size of the item preview slides sizes and icons. (frontend\src\components\slides\CreateSlideModal.tsx, frontend\src\components\slides\SingleSlide.tsx, frontend\src\components\slides\HalfSlide.tsx, frontend\src\components\slides\SlidesSidebar.tsx) (CSS stuff)

- Changes to the Edit Block Sidebar. It includes spacing for multpile choice question answer options to easily distinguish which option it is. (frontend\src\components\slides\EditBlockSidebar.tsx)

  It also changes the spacing between current option selection box dropdown menu box and title of the slide. (frontend\src\components\slides\EditBlockSidebar.tsx, frontend\src\components\block\multiple_choice\EditMultipleChoiceQuestionBlockForm.tsx, frontend\src\components\block\text\EditTextBlockForm.tsx, frontend\src\components\block\text\TextBlock.tsx)

- Added static Question List card in the current lesson slides. Implementation still required due to backend code refactoring... (frontend\src\components\slides\QuestionListSidebar.tsx)

- Lesson Plan changes button on the delete from lesson plan (frontend\src\components\course\LessonPlanSidebar.tsx)

- Lesson Catalogue add to lesson plan button changes (frontend\src\components\course\LessonPlanCatalogue.tsx)

- Edit TextBlock on for displaying better the textbox slide title and the body finally appearing. (frontend\src\components\block\text\TextBlock.tsx) (everything)

- Changes to state on the multiple choice question selection. (frontend\src\components\block\multiple_choice\MultipleChoiceGroup.tsx)
