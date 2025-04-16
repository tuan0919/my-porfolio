import TitleText from "../title-text";
import { NotesBentoGrid } from "./NotesBentoGrid";

function Notes() {
  return (
    <div id="projects">
      <TitleText
        title="Archived"
        description={`My notes while studying different technologies`}
      />
      <NotesBentoGrid />
    </div>
  );
}

export default Notes;
