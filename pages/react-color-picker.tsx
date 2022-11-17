import { useFieldExtension, Wrapper } from "@graphcms/app-sdk-react";
import { Box, Flex } from "@hygraph/baukasten";
import { useEffect, useState } from "react";
import { CirclePicker, ColorResult } from "react-color";

function ReactColor() {
    const {
        value,
        onChange,
        extension: { fieldConfig },
    } = useFieldExtension();
    const [color, setColor] = useState<ColorResult>();
    const colorsConfig: any = fieldConfig?.colors;
    const colors: string[] = colorsConfig !== "" ? colorsConfig.split(",") : [];

    const handleChangeComplete = (color: ColorResult) => {
        onChange({
            hex: color.hex,
            rgba: color.rgb,
        });
        setColor(color);
    };

    return (
        <Box p="2px">
            <CirclePicker
                color={color?.hex || "#fff"}
                colors={colors.length > 0 ? colors : undefined}
                onChangeComplete={handleChangeComplete}
            />
        </Box>
    );
}

export default function Page() {
    return (
        <Wrapper>
            <ReactColor />
        </Wrapper>
    );
}
