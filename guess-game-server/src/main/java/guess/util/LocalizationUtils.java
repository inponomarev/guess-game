package guess.util;

import guess.domain.source.LocaleItem;

import java.util.List;

/**
 * Localization utility methods.
 */
public class LocalizationUtils {
    private static final String ENGLISH_LANGUAGE = "en";
    private static final LocaleItem DEFAULT_LOCALE_ITEM = new LocaleItem(ENGLISH_LANGUAGE, "");

    /**
     * Gets english name.
     *
     * @param localeItems locale items
     * @return english name
     */
    public static String getEnglishName(List<LocaleItem> localeItems) {
        return localeItems.stream()
                .filter(et -> et.getLanguage().equals(ENGLISH_LANGUAGE))
                .findFirst().orElse(DEFAULT_LOCALE_ITEM).getText();
    }
}
