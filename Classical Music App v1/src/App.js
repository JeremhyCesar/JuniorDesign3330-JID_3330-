import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import StudentHome from "./pages/StudentHome";
import Worksheet from "./pages/Worksheet";
import Review from "./pages/Review";
import VideoFrame1 from "./pages/VideoFrame1";
import VideoFrame2 from "./pages/VideoFrame2";
import EndScreen from "./pages/EndScreen";
import Question5 from "./pages/Question5";
import Question4 from "./pages/Question4";
import Question3 from "./pages/Question3";
import Question2 from "./pages/Question2";
import Question1 from "./pages/Question1";
import Quizzes from "./pages/Quizzes";
import Social from "./pages/Social";
import Listening from "./pages/Listening";
import StudentLessonsExpanded2 from "./pages/StudentLessonsExpanded2";
import StudentLesson2 from "./pages/StudentLesson2";
import StudentLessonsExpanded from "./pages/StudentLessonsExpanded";
import StudentLesson from "./pages/StudentLesson";
import LoginScreen from "./pages/LoginScreen";
import StudentSignUp from "./pages/StudentSignUp";
import StudentLogin from "./pages/StudentLogin";
import StudentPassword from "./pages/StudentPassword";
import StudentUsername from "./pages/StudentUsername";
import FirstScreen from "./pages/FirstScreen";
import QuizzesExpanded from "./pages/QuizzesExpanded";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/worksheet":
        title = "";
        metaDescription = "";
        break;
      case "/review":
        title = "";
        metaDescription = "";
        break;
      case "/video-2":
        title = "";
        metaDescription = "";
        break;
      case "/video-1":
        title = "";
        metaDescription = "";
        break;
      case "/end-screen":
        title = "";
        metaDescription = "";
        break;
      case "/question-5":
        title = "";
        metaDescription = "";
        break;
      case "/question-4":
        title = "";
        metaDescription = "";
        break;
      case "/question-3":
        title = "";
        metaDescription = "";
        break;
      case "/question-2":
        title = "";
        metaDescription = "";
        break;
      case "/question-1":
        title = "";
        metaDescription = "";
        break;
      case "/quizzes":
        title = "";
        metaDescription = "";
        break;
      case "/social":
        title = "";
        metaDescription = "";
        break;
      case "/listening":
        title = "";
        metaDescription = "";
        break;
      case "/student-lessons-expanded-2":
        title = "";
        metaDescription = "";
        break;
      case "/student-lesson-2":
        title = "";
        metaDescription = "";
        break;
      case "/student-lessons-expanded":
        title = "";
        metaDescription = "";
        break;
      case "/student-lesson":
        title = "";
        metaDescription = "";
        break;
      case "/login-screen":
        title = "";
        metaDescription = "";
        break;
      case "/student-sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/student-login":
        title = "";
        metaDescription = "";
        break;
      case "/student-password":
        title = "";
        metaDescription = "";
        break;
      case "/student-username":
        title = "";
        metaDescription = "";
        break;
      case "/first-screen":
        title = "";
        metaDescription = "";
        break;
      case "/quizzes-expanded":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<StudentHome />} />
      <Route path="/worksheet" element={<Worksheet />} />
      <Route path="/review" element={<Review />} />
      <Route path="/video-2" element={<VideoFrame1 />} />
      <Route path="/video-1" element={<VideoFrame2 />} />
      <Route path="/end-screen" element={<EndScreen />} />
      <Route path="/question-5" element={<Question5 />} />
      <Route path="/question-4" element={<Question4 />} />
      <Route path="/question-3" element={<Question3 />} />
      <Route path="/question-2" element={<Question2 />} />
      <Route path="/question-1" element={<Question1 />} />
      <Route path="/quizzes" element={<Quizzes />} />
      <Route path="/social" element={<Social />} />
      <Route path="/listening" element={<Listening />} />
      <Route
        path="/student-lessons-expanded-2"
        element={<StudentLessonsExpanded2 />}
      />
      <Route path="/student-lesson-2" element={<StudentLesson2 />} />
      <Route
        path="/student-lessons-expanded"
        element={<StudentLessonsExpanded />}
      />
      <Route path="/student-lesson" element={<StudentLesson />} />
      <Route path="/login-screen" element={<LoginScreen />} />
      <Route path="/student-sign-up" element={<StudentSignUp />} />
      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/student-password" element={<StudentPassword />} />
      <Route path="/student-username" element={<StudentUsername />} />
      <Route path="/first-screen" element={<FirstScreen />} />
      <Route path="/quizzes-expanded" element={<QuizzesExpanded />} />
    </Routes>
  );
}
export default App;
