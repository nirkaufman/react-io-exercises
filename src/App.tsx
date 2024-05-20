// import {AccordionStart} from "./start/4_context_patterns/accordion-start.tsx";
// import {AccordionPage} from "./solutions/4_context/AccordionPage.tsx";
// import {Children, cloneElement, isValidElement} from "react";
// import {BlogPostPage} from "./start/5_rendering/BlogPostPage.tsx";
import {BlogPostEnd} from "./solutions/5_suspanse/BlogPostEnd.tsx";

function App() {

  return (
      <div className="flex items-center justify-center">
        {/*<h2>Accordion page</h2>*/}
        {/*<AccordionPage />*/}

        {/*<ReportClick>*/}
        {/*  <button id='eventId1'  onClick={() => alert('clicked')}>alert</button>*/}
        {/*  <div id='eventId2' onClick={() => alert('div alert')}>div alert</div>*/}
        {/*</ReportClick>*/}

        <BlogPostEnd />
      </div>
  )
}

// function ReportClick({children}: {children: React.ReactNode}) {
//   return (
//       <div>
//         {Children.map(children, (child) => {
//           if (isValidElement(child)) {
//             return cloneElement(child, {
//                   onClick: () => {
//                     console.log("Report click event" + child.props.id);
//                     if (child.props.onClick) {
//                       child.props.onClick();
//                     }
//                   }
//                 }
//             )}
//         })}
//       </div>
//   )
// }



export default App
