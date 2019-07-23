package acme.guess.dto;

import acme.guess.domain.QuestionAnswers;

import java.util.Set;

/**
 * Picture, names DTO.
 */
public class PictureNamesDto extends QuestionAnswersDto {
    private String fileName;

    private String name0;
    private String name1;
    private String name2;
    private String name3;

    public PictureNamesDto(String questionSetName, int currentIndex, int totalNumber, String logoFileName, String fileName,
                           long id0, long id1, long id2, long id3,
                           String name0, String name1, String name2, String name3,
                           boolean invalid0, boolean invalid1, boolean invalid2, boolean invalid3) {
        super(questionSetName, currentIndex, totalNumber, logoFileName, id0, id1, id2, id3, invalid0, invalid1, invalid2, invalid3);

        this.fileName = fileName;
        this.name0 = name0;
        this.name1 = name1;
        this.name2 = name2;
        this.name3 = name3;
    }

    public String getFileName() {
        return fileName;
    }

    public String getName0() {
        return name0;
    }

    public String getName1() {
        return name1;
    }

    public String getName2() {
        return name2;
    }

    public String getName3() {
        return name3;
    }

    public static PictureNamesDto convertToDto(String questionSetName, int currentNumber, int totalNumber, String directoryName,
                                               String logoFileName, QuestionAnswers questionAnswers, Set<Long> invalidAnswerIds) {
        return new PictureNamesDto(questionSetName, currentNumber, totalNumber,
                (logoFileName != null) ? String.format("%s/%s", directoryName, logoFileName) : null,
                String.format("%s/%s", directoryName, questionAnswers.getQuestion().getFileName()),
                questionAnswers.getAnswers().get(0).getId(), questionAnswers.getAnswers().get(1).getId(),
                questionAnswers.getAnswers().get(2).getId(), questionAnswers.getAnswers().get(3).getId(),
                questionAnswers.getAnswers().get(0).getName(), questionAnswers.getAnswers().get(1).getName(),
                questionAnswers.getAnswers().get(2).getName(), questionAnswers.getAnswers().get(3).getName(),
                invalidAnswerIds.contains(questionAnswers.getAnswers().get(0).getId()),
                invalidAnswerIds.contains(questionAnswers.getAnswers().get(1).getId()),
                invalidAnswerIds.contains(questionAnswers.getAnswers().get(2).getId()),
                invalidAnswerIds.contains(questionAnswers.getAnswers().get(3).getId()));
    }
}
