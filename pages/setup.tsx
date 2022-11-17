import { useApp, Wrapper } from "@graphcms/app-sdk-react";
import {
    Alert,
    AlertLink,
    Box,
    Button,
    Flex,
    Heading,
    Inline,
    Stack,
    Text,
} from "@hygraph/baukasten";
import { ExternalLink } from "@hygraph/icons";

function Setup() {
    const { installation, updateInstallation } = useApp();
    if (installation.status === "COMPLETED") {
        return (
            <Stack maxWidth="720" padding="2px">
                <Stack gap="4">
                    <Inline gap="8" alignItems="center">
                        <img
                            src="/react-color-logo.svg"
                            width={30}
                            alt="React Color Logo"
                        />
                        <Text fontWeight={700} as="h2">
                            React Color Picker
                        </Text>
                    </Inline>
                    <Text color="neutral.400" fontSize="copy">
                        React Color Picker field for Hygraph, powered by React
                        Color package.
                    </Text>
                    <Alert variantColor="info" showStatusIcon>
                        You can now add the React Color Picker field to your
                        schema.{" "}
                        <AlertLink
                            as="a"
                            target="_blank"
                            href={
                                "https://github.com/castroalves/react-color-app"
                            }
                        >
                            Learn more <Box as={ExternalLink} size="icon.16" />
                        </AlertLink>
                    </Alert>
                    <Button
                        onClick={() => {
                            updateInstallation({
                                status: "COMPLETED",
                                config: {},
                            });
                        }}
                    >
                        Save
                    </Button>
                </Stack>
            </Stack>
        );
    }
    return <Install />;
}

function Install() {
    const { updateInstallation } = useApp();

    return (
        <Stack maxWidth="720" padding="2px">
            <Stack gap="4">
                <Inline gap="8" alignItems="center">
                    <img
                        src="/react-color-logo.svg"
                        width={30}
                        alt="React Color Logo"
                    />
                    <Text fontWeight={700} as="h2">
                        React Color Picker
                    </Text>
                </Inline>
                <Text color="neutral.400" fontSize="copy">
                    React Color Picker field for Hygraph, powered by React Color
                    package.
                </Text>
                <Box alignItems="left">
                    <Button
                        onClick={() => {
                            updateInstallation({
                                status: "COMPLETED",
                                config: {},
                            });
                        }}
                    >
                        Save
                    </Button>
                </Box>
            </Stack>
        </Stack>
    );
}

export default function Page() {
    return (
        <Wrapper>
            <Setup />
        </Wrapper>
    );
}
