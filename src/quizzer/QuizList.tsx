import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { QuizCard } from "./QuizCard";
import "./QuizList.css";
import { QuizView } from "./QuizView";

export const QuizList = ({
    quizzes,
    editQuiz,
    deleteQuiz,
    showModal
}: {
    quizzes: Quiz[];
    editQuiz: (id: number, quiz: Quiz) => void;
    deleteQuiz: (id: number) => void;
    showModal: () => void;
}) => {
    const [displayId, setDisplayId] = useState<null | number>(null);

    const handleQuizView = (id: number) => {
        setDisplayId(id);
    };

    const resetQuizView = () => {
        setDisplayId(null);
    };

    return (
        <div className="quiz_list">
            {!displayId && (
                <>
                    {quizzes.map((quiz: Quiz) => (
                        <QuizCard
                            key={quiz.id}
                            quiz={quiz}
                            handleClick={handleQuizView}
                        ></QuizCard>
                    ))}
                    <Button className="add_btn" onClick={showModal}>
                        Add New Quiz
                    </Button>
                </>
            )}
            {quizzes.map((quiz: Quiz) => {
                return displayId === quiz.id ? (
                    <QuizView 
                        key={quiz.id}
                        quiz={quiz}
                        editQuiz={editQuiz}
                        deleteQuiz={deleteQuiz}
                        resetView={resetQuizView}
                    />
                ) : null;
            })}
        </div>
    );
};
