import { ErrorPageStatusCodes } from "@digi/arbetsformedlingen"
import { DigiLinkInternal, DigiNotificationErrorPage } from "@digi/arbetsformedlingen-react"

export const PageNotFound = () => {
    return <>
        <DigiNotificationErrorPage
            afHttpStatusCode={ErrorPageStatusCodes.NOT_FOUND}
            afCustomHeading="Hoppsan sidan kunde inte hittas! 🤡 "
        >
            <p slot="bodytext">
                Det kan bero på att länken inte existerar längre eller att något gick fel.Följ länken till vår startsida!
            </p>

            <ul slot="links">
                <li>
                    <DigiLinkInternal afHref="/" afVariation="small">
                        Till startsidan
                    </DigiLinkInternal>
                </li>
            </ul>
        </DigiNotificationErrorPage>
    </>
} 