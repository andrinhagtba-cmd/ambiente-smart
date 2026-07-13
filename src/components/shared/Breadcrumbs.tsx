import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Fragment } from "react";

export interface Crumb {
  label: string;
  to?: string;
  params?: Record<string, string>;
}

export function Breadcrumbs({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  return (
    <nav aria-label="Trilha de navegação" className="overflow-x-auto">
      <ol className="flex items-center gap-1.5 whitespace-nowrap text-xs">
        <li>
          <Link
            to="/"
            className={
              dark
                ? "text-ink-muted transition-colors hover:text-ink-foreground"
                : "text-muted-foreground transition-colors hover:text-foreground"
            }
          >
            Início
          </Link>
        </li>
        {items.map((item, i) => (
          <Fragment key={`${item.label}-${i}`}>
            <li aria-hidden="true">
              <ChevronRight className={dark ? "size-3 text-ink-muted" : "size-3 text-muted-foreground"} />
            </li>
            <li aria-current={i === items.length - 1 ? "page" : undefined}>
              {item.to && i !== items.length - 1 ? (
                <Link
                  to={item.to}
                  params={item.params}
                  className={
                    dark
                      ? "text-ink-muted transition-colors hover:text-ink-foreground"
                      : "text-muted-foreground transition-colors hover:text-foreground"
                  }
                >
                  {item.label}
                </Link>
              ) : (
                <span className={dark ? "text-ink-foreground" : "text-foreground"}>{item.label}</span>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
