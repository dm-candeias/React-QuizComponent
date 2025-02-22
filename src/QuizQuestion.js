import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton.js";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { incorrectAnswer: false };
  }
  handleClick(button_text) {
    if (button_text === this.props.quiz_question.answer) {
      this.props.showNextQuestionHandler();
      this.setState({ incorrectAnswer: false });
    } else {
      this.setState({ incorrectAnswer: true });
    }
  }
  render() {
    return (
      <main>
        {this.state.incorrectAnswer ? (
          <p className="error">Sorry, that's not right</p>
        ) : null}
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((options, index) => {
              console.log(options, index);
              return (
                <QuizQuestionButton
                  key={index}
                  clickHandler={this.handleClick.bind(this)}
                  button_text={options}
                />
              );
            })}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
