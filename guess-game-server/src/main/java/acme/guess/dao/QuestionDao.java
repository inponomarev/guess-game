package acme.guess.dao;

import acme.guess.domain.QuestionSet;

import java.util.List;

/**
 * Question DAO.
 */
public interface QuestionDao {
    List<QuestionSet> getQuestionSets();
}
