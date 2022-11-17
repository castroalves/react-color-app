import { useApp, Wrapper } from "@graphcms/app-sdk-react";
import { Box, Button, Flex, Heading } from "@hygraph/baukasten";

function Setup() {
    const { installation, updateInstallation } = useApp();
    if (installation.status === "COMPLETED") {
        return (
            <Flex gap="16" flexDirection={["column", "row"]}>
                <Box p="s">
                    <Heading>React Color</Heading>
                    <div>App is installed</div>
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
            </Flex>
        );
    }
    return <Install />;
}

function Install() {
    const { updateInstallation } = useApp();

    return (
        <Flex gap="16" flexDirection={["column", "row"]}>
            <Box p="s">
                <Heading>React Color</Heading>

                <Button
                    onClick={() => {
                        updateInstallation({ status: "COMPLETED", config: {} });
                    }}
                >
                    Save
                </Button>
            </Box>
        </Flex>
    );
}

export default function Page() {
    return (
        <Wrapper>
            <Setup />
        </Wrapper>
    );
}
