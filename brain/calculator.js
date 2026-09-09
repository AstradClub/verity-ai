// ==========================================
// VERITY CALCULATOR BRAIN
// ==========================================

function calculate(expression) {

    try {

        let math = expression
            .toLowerCase()
            .replace(/,/g, "")
            .replace(/\s+/g, "");

        // Replace common math symbols
        math = math
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/−/g, "-")
            .replace(/\^/g, "**");

        // Square root
        math = math.replace(
            /sqrt\(([^()]*)\)/g,
            "Math.sqrt($1)"
        );

        // Allow only safe calculator characters/functions
        if (!/^[0-9+\-*/().%**Math.sqrt]+$/.test(math)) {
            return null;
        }

        // Calculate
        const answer = Function(
            `"use strict"; return (${math})`
        )();

        // Make sure the result is actually a number
        if (
            typeof answer !== "number" ||
            !Number.isFinite(answer)
        ) {
            return null;
        }

        return answer;

    } catch {

        return null;

    }
}
