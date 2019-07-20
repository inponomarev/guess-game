package acme.guess.service;

import acme.guess.dao.exception.QuestionSetNotExistsException;
import acme.guess.domain.StartParameters;
import acme.guess.domain.State;

/**
 * State service.
 */
public interface StateService {
    void setStartParameters(StartParameters startParameters) throws QuestionSetNotExistsException;

    State getState();
}
