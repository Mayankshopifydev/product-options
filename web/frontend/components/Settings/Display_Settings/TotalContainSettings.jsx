import React, { useState } from "react";
import { TextField, FormLayout,Card, Stack, Tooltip, Icon,Text } from "@shopify/polaris";
import { QuestionMarkMajor } from "@shopify/polaris-icons";


function TotalContainSettings() {
    const [totalBefore, setTotalBefore] = useState("Total Extras:");
    const [totalAfter, setTotalAfter] = useState("");
  return (
    <div>
    <FormLayout>
    <FormLayout.Group>
    <TextField
            label="Total Text (Before)"

            autoComplete="off"
          />
            <Text variant="bodyMd" fontWeight="bold">
        {"{{ Total Price }}"}
        </Text>
          <TextField
          label="Total Text (After)"

            autoComplete="off"
          />
    </FormLayout.Group>
</FormLayout>
    </div>
  )
}

export default TotalContainSettings